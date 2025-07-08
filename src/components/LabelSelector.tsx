import React, { useState, useRef, useEffect } from 'react';
import {
  Select,
  Tag,
  Button,
  Input,
  Space,
  ColorPicker,
  Typography,
} from 'antd';
import {
  PlusOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { CustomLabel } from '../types/email';

const { Text } = Typography;

interface LabelSelectorProps {
  selectedLabels: string[];
  availableLabels: CustomLabel[];
  onLabelsChange: (labelIds: string[]) => void;
  onCreateLabel?: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  placeholder?: string;
  className?: string;
  maxHeight?: string;
}

const LabelSelector: React.FC<LabelSelectorProps> = ({
  selectedLabels,
  availableLabels,
  onLabelsChange,
  onCreateLabel,
  placeholder = "Add labels...",
  className = "",
  maxHeight = "200px",
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newLabelName, setNewLabelName] = useState('');
  const [newLabelColor, setNewLabelColor] = useState('#1890ff');

  const filteredLabels = availableLabels.filter(label =>
    label.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    !selectedLabels.includes(label.id)
  );

  const selectedLabelObjects = availableLabels.filter(label =>
    selectedLabels.includes(label.id)
  );

  const handleLabelToggle = (labelId: string) => {
    if (selectedLabels.includes(labelId)) {
      onLabelsChange(selectedLabels.filter(id => id !== labelId));
    } else {
      onLabelsChange([...selectedLabels, labelId]);
    }
  };

  const handleCreateNewLabel = () => {
    if (!newLabelName.trim() || !onCreateLabel) return;

    const existingLabel = availableLabels.find(
      label => label.name.toLowerCase() === newLabelName.trim().toLowerCase()
    );

    if (existingLabel) {
      handleLabelToggle(existingLabel.id);
    } else {
      onCreateLabel({
        name: newLabelName.trim(),
        color: newLabelColor,
        isSystem: false,
      });
    }

    setNewLabelName('');
    setShowCreateForm(false);
    setSearchValue('');
  };

  const options = filteredLabels.map(label => ({
    value: label.id,
    label: (
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
        {label.description && (
          <Text type="secondary" style={{ fontSize: 11 }}>
            - {label.description}
          </Text>
        )}
      </Space>
    ),
  }));

  const tagRender = (props: any) => {
    const { label, value, closable, onClose } = props;
    const labelObj = availableLabels.find(l => l.id === value);
    
    if (!labelObj) return null;

    return (
      <Tag
        color={labelObj.color}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {labelObj.name}
      </Tag>
    );
  };

  return (
    <div className={className}>
      <Select
        mode="multiple"
        placeholder={placeholder}
        value={selectedLabels}
        onChange={onLabelsChange}
        options={options}
        tagRender={tagRender}
        style={{ width: '100%' }}
        searchValue={searchValue}
        onSearch={setSearchValue}
        dropdownRender={(menu) => (
          <div>
            {menu}
            {showCreateForm && onCreateLabel ? (
              <div style={{ padding: 8, borderTop: '1px solid #f0f0f0' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <PlusOutlined />
                    <Text strong>Create new label</Text>
                  </Space>
                  <Space.Compact style={{ width: '100%' }}>
                    <Input
                      placeholder="Label name..."
                      value={newLabelName}
                      onChange={(e) => setNewLabelName(e.target.value)}
                      onPressEnter={handleCreateNewLabel}
                      autoFocus
                    />
                    <ColorPicker
                      value={newLabelColor}
                      onChange={(color) => setNewLabelColor(color.toHexString())}
                      size="small"
                    />
                    <Button
                      type="primary"
                      icon={<CheckOutlined />}
                      onClick={handleCreateNewLabel}
                      disabled={!newLabelName.trim()}
                    />
                  </Space.Compact>
                </div>
              </div>
            ) : (
              searchValue && filteredLabels.length === 0 && onCreateLabel && (
                <div style={{ padding: 8, borderTop: '1px solid #f0f0f0' }}>
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={() => {
                      setNewLabelName(searchValue);
                      setShowCreateForm(true);
                    }}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    Create "{searchValue}" label
                  </Button>
                </div>
              )
            )}
          </div>
        )}
        maxTagCount="responsive"
      />
    </div>
  );
};

export default LabelSelector;