import React, { useState, useEffect } from "react";
import {
  List,
  Checkbox,
  Button,
  Space,
  Typography,
  Badge,
  Dropdown,
  Empty,
  Spin,
  Tag,
  Avatar,
  MenuProps,
} from "antd";
import {
  StarOutlined,
  StarFilled,
  MoreOutlined,
  CheckOutlined,
  DeleteOutlined,
  MailOutlined,
  InboxOutlined,
  SendOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  TagOutlined,
  CalendarOutlined,
  SoundOutlined,
  ExclamationCircleOutlined,
  BarChartOutlined,
  MessageOutlined,
  TicketOutlined,
} from "@ant-design/icons";
import { Email, CustomLabel } from "../types/email";
import EmailLabelActions from "./EmailLabelActions";
import { useLazyGetMailListResponseQuery } from "../service/inboxService";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setFilterSettings } from "../store/filterSlice";
import { getIntentLabel, getSenderName } from "../hooks/commonFunction";

const { Text, Title } = Typography;

interface EmailListProps {
  emails: any[];
  selectedEmailId: string | null;
  onEmailSelect: (email: Email, fullPage?: boolean) => void;
  onStarToggle: (emailId: string) => void;
  onCheckToggle: (emailId: string) => void;
  checkedEmails: Set<string>;
  activeSection: string;
  customLabels: CustomLabel[];
  onEmailLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel: (labelData: Omit<CustomLabel, "id" | "createdAt">) => void;
  onBulkMarkAsRead: (emailIds: string[], isRead: boolean) => void;
  onBulkDelete: (emailIds: string[]) => void;
  onBulkRestore?: (emailIds: string[]) => void;
  onSelectAll: () => void;
  onUnselectAll: () => void;
  onUndo?: () => void;
  setEmails?: Function;
  readStatus: string;
  searchFilter: any;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmailId,
  onEmailSelect,
  onStarToggle,
  onCheckToggle,
  checkedEmails,
  activeSection,
  customLabels,
  onEmailLabelsChange,
  onCreateLabel,
  onBulkMarkAsRead,
  onBulkDelete,
  onBulkRestore,
  onSelectAll,
  onUnselectAll,
  onUndo,
  setEmails,
  readStatus,
  searchFilter,
}) => {
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [filterData, setFilterData] = useState<any>({
    page: 1,
    page_size: 100,
    search: undefined,
    folder: 'inbox'
  });
  const [inboxCount, setInboxCount] = useState(0);
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();
  const [isFiltered, setIsFiltered] = useState(false);
  const [activeSectionTab, setActiveSectionTab] = useState("inbox");

  useEffect(() => {
    if (filters?.search === "") {
      getMailList(filterData);
      setIsFiltered(false);
    }
  }, [filterData, filters]);

  useEffect(() => {
    if (
      filters !== undefined &&
      Object.keys(filters).length >= 1 &&
      filters?.search !== ""
    ) {
      if (setEmails && isFiltered === false) setEmails([]);
      getMailList(filters);
      setIsFiltered(true);
    }
  }, [filters]);

  useEffect(() => {
    if (getMailListResponse.isSuccess && setEmails) {
      const staticList = (getMailListResponse as any)?.data?.response?.data?.results;

      if (staticList && Array.isArray(staticList)) {
        setInboxCount((getMailListResponse as any)?.data?.response?.data?.count || 0);

        setEmails((prevEmails: any[]) => {
          const prevEmailMap = new Map(
            prevEmails.map((email) => [email.mail_id, email])
          );

          const updatedEmails = staticList.map((email: any) => {
            if (prevEmailMap.has(email.mail_id)) {
              return prevEmailMap.get(email.mail_id);
            } else {
              return {
                ...email,
                intentLabel: email.labels || "new",
              };
            }
          });

          return updatedEmails;
        });
      }
    }
  }, [getMailListResponse]);

  const formatTime = (created_at: string) => {
    const date = new Date(created_at);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else if (diffInHours < 168) {
      return date.toLocaleDateString("en-US", { weekday: "short" });
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case "inbox":
        return "Inbox";
      case "sent":
        return "Sent";
      case "drafts":
        return "Drafts";
      case "starred":
        return "Starred";
      case "snoozed":
        return "Snoozed";
      case "label-work":
        return "Work";
      case "label-personal":
        return "Personal";
      case "label-important":
        return "Important";
      case "label-travel":
        return "Travel";
      default:
        if (section.startsWith("custom-label-")) {
          const labelId = section.replace("custom-label-", "");
          const label = customLabels.find((l) => l.id === labelId);
          return label?.name || "Unknown Label";
        }
        return "Inbox";
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case "inbox":
        return InboxOutlined;
      case "sent":
        return SendOutlined;
      case "drafts":
        return FileTextOutlined;
      case "starred":
        return StarOutlined;
      case "snoozed":
        return ClockCircleOutlined;
      default:
        return TagOutlined;
    }
  };

  const EmptyState = ({ section }: { section: string }) => {
    const Icon = getSectionIcon(section);
    const title = getSectionTitle(section);

    return (
      <Empty
        image={<Icon style={{ fontSize: 64, color: '#d9d9d9' }} />}
        description={
          <div>
            <Title level={4}>No emails in {title}</Title>
            <Text type="secondary">
              {section === "starred"
                ? "Star important conversations to find them quickly here."
                : section === "snoozed"
                ? "Snoozed conversations will appear here when it's time to deal with them."
                : section.startsWith("custom-label-") ||
                  section.startsWith("label-")
                ? `Conversations with the "${title}" label will appear here.`
                : `No conversations available yet.`}
            </Text>
          </div>
        }
      />
    );
  };

  const checkedEmailsArray = Array.from(checkedEmails);
  const hasCheckedEmails = checkedEmailsArray.length > 0;

  const moreActionsItems: MenuProps['items'] = [
    ...(hasCheckedEmails ? [
      {
        key: 'mark-read',
        label: 'Mark as Read',
        icon: <CheckOutlined />,
        onClick: () => {
          onBulkMarkAsRead(checkedEmailsArray, true);
          setTimeout(() => onUnselectAll(), 100);
        },
      },
      {
        key: 'mark-unread',
        label: 'Mark as Unread',
        icon: <MailOutlined />,
        onClick: () => {
          onBulkMarkAsRead(checkedEmailsArray, false);
          setTimeout(() => onUnselectAll(), 100);
        },
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: <DeleteOutlined />,
        danger: true,
        onClick: () => {
          onBulkDelete(checkedEmailsArray);
          setTimeout(() => onUnselectAll(), 100);
        },
      },
    ] : [
      {
        key: 'no-selection',
        label: 'Select emails to see actions',
        disabled: true,
      },
    ]),
    ...(onUndo ? [
      { type: 'divider' as const },
      {
        key: 'undo',
        label: 'Undo Last Action',
        onClick: onUndo,
      },
    ] : []),
  ];

  if (emails.length === 0) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          padding: 16, 
          borderBottom: '1px solid #f0f0f0',
          background: '#fafafa'
        }}>
          <Title level={4} style={{ margin: 0 }}>
            {getSectionTitle(activeSection)}
          </Title>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <EmptyState section={activeSection} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        padding: 16, 
        borderBottom: '1px solid #f0f0f0',
        background: '#fafafa'
      }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Checkbox
              checked={checkedEmails.size === emails.length && emails.length > 0}
              indeterminate={checkedEmails.size > 0 && checkedEmails.size < emails.length}
              onChange={() => {
                if (checkedEmails.size === emails.length) {
                  onUnselectAll();
                } else {
                  onSelectAll();
                }
              }}
            />

            <div>
              <Title level={5} style={{ margin: 0 }}>
                {activeSectionTab === "sent" ? "Sent" : "Conversations"}
                {` (${emails.filter((email) => !email.is_read).length}/${
                  readStatus === "all" ? inboxCount : emails.length
                })`}
              </Title>
              {activeSectionTab === "inbox" && (
                <Text type="secondary" style={{ fontSize: 12 }}>
                  support@atyourprice.net
                </Text>
              )}
            </div>
          </div>

          <Space>
            {hasCheckedEmails && (
              <EmailLabelActions
                emailIds={checkedEmailsArray}
                currentLabels={[]}
                availableLabels={customLabels}
                onLabelsChange={(emailIds, labelIds) => {
                  onEmailLabelsChange(emailIds, labelIds);
                  setTimeout(() => {
                    onUnselectAll();
                  }, 100);
                }}
                onCreateLabel={onCreateLabel}
              />
            )}

            <Dropdown menu={{ items: moreActionsItems }} placement="bottomRight">
              <Button type="text" icon={<MoreOutlined />} />
            </Dropdown>
          </Space>
        </Space>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        <List
          dataSource={emails}
          renderItem={(email) => {
            const isSelected = selectedEmailId === email.message_id;
            const isChecked = checkedEmails.has(email.message_id);

            return (
              <List.Item
                className={`email-list-item ${isSelected ? 'selected' : ''} ${!email.is_read ? 'unread' : ''}`}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                }}
                onClick={() => onEmailSelect(email)}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  onEmailSelect(email, true);
                }}
              >
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => {
                        e.stopPropagation();
                        onCheckToggle(email.message_id);
                      }}
                    />

                    <Button
                      type="text"
                      icon={
                        email.is_starred ? (
                          <StarFilled style={{ color: '#faad14' }} />
                        ) : (
                          <StarOutlined />
                        )
                      }
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStarToggle(email.message_id);
                      }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                        <Text
                          strong={!email.is_read}
                          style={{
                            color: !email.is_read ? '#000' : '#666',
                            fontSize: 14,
                          }}
                          ellipsis
                        >
                          {getSenderName(email.from_address)}
                        </Text>
                        <Text type="secondary" style={{ fontSize: 12, flexShrink: 0, marginLeft: 8 }}>
                          {formatTime(email.created_at)}
                        </Text>
                      </div>

                      <div style={{ marginBottom: 4 }}>
                        <Text
                          strong={!email.is_read}
                          style={{
                            color: !email.is_read ? '#000' : '#666',
                            fontSize: 14,
                          }}
                          ellipsis
                        >
                          {email.subject}
                        </Text>
                      </div>

                      <Text
                        type="secondary"
                        style={{
                          fontSize: 13,
                          color: !email.is_read ? '#666' : '#999',
                        }}
                        ellipsis
                      >
                        {email.snippet}
                      </Text>

                      {email?.intent && (
                        <div style={{ marginTop: 8 }}>
                          <Tag
                            icon={React.createElement(getIntentLabel(email.intent).icon)}
                            color={getIntentLabel(email.intent).color.includes('blue') ? 'blue' : 
                                   getIntentLabel(email.intent).color.includes('green') ? 'green' :
                                   getIntentLabel(email.intent).color.includes('red') ? 'red' :
                                   getIntentLabel(email.intent).color.includes('yellow') ? 'gold' :
                                   getIntentLabel(email.intent).color.includes('orange') ? 'orange' : 'default'}
                            size="small"
                          >
                            {getIntentLabel(email.intent).text}
                          </Tag>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </List.Item>
            );
          }}
          onScroll={(e) => {
            const target = e.currentTarget;
            if (target.scrollHeight - target.scrollTop === target.clientHeight) {
              if (isFiltered) {
                // Handle filtered pagination if needed
              } else {
                setFilterData((prev: any) => ({
                  ...prev,
                  page: prev.page + 1,
                }));
                setIsFiltered(false);
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default EmailList;