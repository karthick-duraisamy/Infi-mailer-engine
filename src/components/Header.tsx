import React, { useState } from "react";
import {
  Layout,
  Input,
  Button,
  Dropdown,
  Space,
  Badge,
  Avatar,
  Typography,
  MenuProps,
} from "antd";
import {
  SearchOutlined,
  SettingOutlined,
  MenuOutlined,
  PlusOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import SignatureSetup from "./SignatureSetup";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

interface HeaderProps {
  onMenuToggle: () => void;
  onSearch: (query: string) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  filters: FilterOptions;
  onComposeClick: () => void;
  checkedEmails?: Set<string>;
  onBulkMarkAsRead?: (emailIds: string[], isRead: boolean) => void;
  onBulkDelete?: (emailIds: string[]) => void;
  onSelectAll?: () => void;
  onUnselectAll?: () => void;
  onUndo?: () => void;
  hasSelection?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  onSearch,
  onFiltersChange,
  filters,
  onComposeClick,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClearFilters = () => {
    onFiltersChange({
      readStatus: "all",
      starred: false,
      hasAttachment: false,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all",
    });
  };

  const settingsMenuItems: MenuProps['items'] = [
    {
      key: 'signature',
      label: 'Signature Setup',
      icon: <EditOutlined />,
      onClick: () => setShowSignatureSetup(true),
    },
  ];

  const profileMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  return (
    <>
      <AntHeader
        style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={onMenuToggle}
            style={{ display: 'block' }}
            className="lg:hidden"
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
              Mail
            </Title>
          </div>
        </div>

        <div style={{ flex: 1, maxWidth: 600, margin: '0 32px' }}>
          <Space.Compact style={{ width: '100%' }}>
            <Input
              placeholder="Search mail"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={handleSearchChange}
              allowClear
              size="middle"
            />
            <EmailFilters
              filters={filters}
              onFiltersChange={onFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </Space.Compact>
        </div>

        <Space>
          <Dropdown menu={{ items: settingsMenuItems }} placement="bottomRight">
            <Button type="text" icon={<SettingOutlined />} />
          </Dropdown>

          <Badge count={0}>
            <Button type="text" icon={<BellOutlined />} />
          </Badge>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onComposeClick}
          >
            <span className="hidden md:inline">Compose</span>
          </Button>

          <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight">
            <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </Space>
      </AntHeader>

      <SignatureSetup
        isOpen={showSignatureSetup}
        onClose={() => setShowSignatureSetup(false)}
      />
    </>
  );
};

export default Header;