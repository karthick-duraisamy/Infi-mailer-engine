import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  Space,
  Typography,
  Spin,
  MenuProps,
} from 'antd';
import {
  TagOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { CustomLabel } from '../types/email';
import LabelSelector from './LabelSelector';

const { Text } = Typography;

interface EmailLabelActionsProps {
  emailIds: string[];
  currentLabels: string[];
  availableLabels: CustomLabel[];
  onLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel?: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  className?: string;
}

const EmailLabelActions: React.FC<EmailLabelActionsProps> = ({
  emailIds,
  currentLabels,
  availableLabels,
  onLabelsChange,
  onCreateLabel,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState<string[]>(currentLabels);
  const [isUpdating, setIsUpdating] = useState(false);

  React.useEffect(() => {
    setSelectedLabels(currentLabels);
  }, [currentLabels]);

  const handleLabelsChange = async (newLabelIds: string[]) => {
    setIsUpdating(true);
    setSelectedLabels(newLabelIds);
    
    try {
      onLabelsChange(emailIds, newLabelIds);
      setTimeout(() => {
        setIsUpdating(false);
        setIsOpen(false);
      }, 300);
    } catch (error) {
      setIsUpdating(false);
      console.error('Error updating labels:', error);
    }
  };

  const selectedLabelObjects = availableLabels.filter(label =>
    selectedLabels.includes(label.id)
  );

  const dropdownContent = (
    <div style={{ width: 320, padding: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <Text strong>
          Manage Labels {emailIds.length > 1 && `(${emailIds.length} emails)`}
        </Text>
      </div>
      
      {selectedLabels.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>Current labels:</Text>
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {selectedLabelObjects.map((label) => (
              <Space key={label.id} size={4}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: label.color,
                  }}
                />
                <Text style={{ fontSize: 12 }}>{label.name}</Text>
              </Space>
            ))}
          </div>
        </div>
      )}

      <LabelSelector
        selectedLabels={selectedLabels}
        availableLabels={availableLabels}
        onLabelsChange={handleLabelsChange}
        onCreateLabel={onCreateLabel}
        placeholder="Add or create labels..."
        maxHeight="200px"
      />

      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button onClick={() => setIsOpen(false)}>
          Done
        </Button>
      </div>
    </div>
  );

  return (
    <Dropdown
      open={isOpen}
      onOpenChange={setIsOpen}
      dropdownRender={() => dropdownContent}
      placement="bottomLeft"
      trigger={['click']}
    >
      <Button
        type="text"
        disabled={isUpdating}
        className={className}
      >
        <Space>
          {isUpdating ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 14 }} />} />
          ) : (
            <TagOutlined />
          )}
          <span>Labels</span>
          {selectedLabels.length > 0 && (
            <span style={{
              background: '#1890ff',
              color: 'white',
              borderRadius: 10,
              padding: '2px 6px',
              fontSize: 11,
              minWidth: 16,
              textAlign: 'center',
            }}>
              {selectedLabels.length}
            </span>
          )}
          {isUpdating && <Text type="secondary" style={{ fontSize: 11 }}>Updating...</Text>}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default EmailLabelActions;