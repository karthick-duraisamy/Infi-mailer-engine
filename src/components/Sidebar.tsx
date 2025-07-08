import React, { useState } from 'react';
import {
  Menu,
  Button,
  Badge,
  Divider,
  Typography,
  Space,
} from 'antd';
import {
  InboxOutlined,
  StarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  SettingOutlined,
  PlusOutlined,
  TagOutlined,
  DownOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { CustomLabel } from '../types/email';

const { Text } = Typography;

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
  onComposeClick: () => void;
  customLabels: CustomLabel[];
  onManageLabels: () => void;
  emailCounts: Record<string, number>;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(true);

  if (!isOpen) return null;

  const navigationItems = [
    {
      key: 'inbox',
      label: (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <span>All Conversations</span>
          {emailCounts.inbox > 0 && <Badge count={emailCounts.inbox} size="small" />}
        </Space>
      ),
      icon: <InboxOutlined />,
    },
    {
      key: 'starred',
      label: (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <span>Starred</span>
          {emailCounts.starred > 0 && <Badge count={emailCounts.starred} size="small" />}
        </Space>
      ),
      icon: <StarOutlined />,
    },
    {
      key: 'snoozed',
      label: (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <span>Snoozed</span>
          {emailCounts.snoozed > 0 && <Badge count={emailCounts.snoozed} size="small" />}
        </Space>
      ),
      icon: <ClockCircleOutlined />,
    },
    {
      key: 'bin',
      label: (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <span>Bin</span>
          {emailCounts.bin > 0 && <Badge count={emailCounts.bin} size="small" />}
        </Space>
      ),
      icon: <DeleteOutlined />,
    },
  ];

  const systemLabels = customLabels.filter(label => label.isSystem);
  const userLabels = customLabels.filter(label => !label.isSystem);

  const getLabelCount = (labelId: string) => {
    return emailCounts[`label-${labelId}`] || emailCounts[`custom-label-${labelId}`] || 0;
  };

  const handleLabelClick = (labelId: string, isSystem: boolean) => {
    if (isSystem) {
      onItemSelect(`label-${labelId}`);
    } else {
      onItemSelect(`custom-label-${labelId}`);
    }
  };

  const labelMenuItems = [
    ...(systemLabels.length > 0 ? [{
      type: 'group' as const,
      label: 'System Labels',
      children: systemLabels.map(label => ({
        key: `label-${label.id}`,
        label: (
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: label.color,
                }}
              />
              <span>{label.name}</span>
            </Space>
            {getLabelCount(label.id) > 0 && (
              <Badge count={getLabelCount(label.id)} size="small" />
            )}
          </Space>
        ),
        onClick: () => handleLabelClick(label.id, true),
      })),
    }] : []),
    ...(userLabels.length > 0 ? [{
      type: 'group' as const,
      label: 'Custom Labels',
      children: userLabels.map(label => ({
        key: `custom-label-${label.id}`,
        label: (
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: label.color,
                }}
              />
              <span>{label.name}</span>
            </Space>
            {getLabelCount(label.id) > 0 && (
              <Badge count={getLabelCount(label.id)} size="small" />
            )}
          </Space>
        ),
        onClick: () => handleLabelClick(label.id, false),
      })),
    }] : []),
    {
      key: 'add-label',
      label: (
        <Space>
          <PlusOutlined />
          <span>Add label</span>
        </Space>
      ),
      onClick: onManageLabels,
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onComposeClick}
          block
          size="large"
        >
          Compose
        </Button>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        <Menu
          mode="inline"
          selectedKeys={[activeItem]}
          items={navigationItems}
          onSelect={({ key }) => onItemSelect(key)}
          style={{ border: 'none' }}
        />

        {(systemLabels.length > 0 || userLabels.length > 0) && (
          <>
            <Divider style={{ margin: '8px 0' }} />
            
            <div style={{ padding: '0 16px' }}>
              <Button
                type="text"
                icon={labelsExpanded ? <DownOutlined /> : <RightOutlined />}
                onClick={() => setLabelsExpanded(!labelsExpanded)}
                style={{
                  padding: '4px 8px',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <TagOutlined />
                <Text strong>Labels</Text>
              </Button>
              
              <Button
                type="text"
                icon={<SettingOutlined />}
                onClick={onManageLabels}
                size="small"
                style={{ float: 'right', marginTop: -32 }}
              />
            </div>

            {labelsExpanded && (
              <Menu
                mode="inline"
                selectedKeys={[activeItem]}
                items={labelMenuItems}
                style={{ border: 'none', marginLeft: 16 }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;