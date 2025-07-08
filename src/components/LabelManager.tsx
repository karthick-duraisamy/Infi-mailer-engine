import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  List,
  Typography,
  Space,
  ColorPicker,
  Tag,
  Empty,
  Popconfirm,
  Card,
  Divider,
} from 'antd';
import {
  TagOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { CustomLabel } from '../types/email';
import { labelColors } from '../data/mockLabels';

const { TextArea } = Input;
const { Text, Title } = Typography;

interface LabelManagerProps {
  isOpen: boolean;
  onClose: () => void;
  labels: CustomLabel[];
  onCreateLabel: (label: Omit<CustomLabel, 'id' | 'createdAt'>) => void;
  onUpdateLabel: (id: string, updates: Partial<CustomLabel>) => void;
  onDeleteLabel: (id: string) => void;
}

const LabelManager: React.FC<LabelManagerProps> = ({
  isOpen,
  onClose,
  labels,
  onCreateLabel,
  onUpdateLabel,
  onDeleteLabel,
}) => {
  const [editingLabel, setEditingLabel] = useState<string | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [createForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const handleEdit = (label: CustomLabel) => {
    setEditingLabel(label.id);
    setIsCreatingNew(false);
    editForm.setFieldsValue({
      name: label.name,
      color: label.color,
      description: label.description || '',
    });
  };

  const handleCreateNew = () => {
    setEditingLabel(null);
    setIsCreatingNew(true);
    createForm.resetFields();
    createForm.setFieldsValue({
      color: labelColors[0],
    });
  };

  const handleSaveCreate = async () => {
    try {
      const values = await createForm.validateFields();
      onCreateLabel({
        name: values.name.trim(),
        color: values.color,
        description: values.description?.trim() || undefined,
        isSystem: false,
      });
      
      setIsCreatingNew(false);
      createForm.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleSaveEdit = async () => {
    if (!editingLabel) return;
    
    try {
      const values = await editForm.validateFields();
      onUpdateLabel(editingLabel, {
        name: values.name.trim(),
        color: values.color,
        description: values.description?.trim() || undefined,
      });
      
      setEditingLabel(null);
      editForm.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingLabel(null);
    setIsCreatingNew(false);
    createForm.resetFields();
    editForm.resetFields();
  };

  const handleDeleteLabel = (labelId: string) => {
    const label = labels.find(l => l.id === labelId);
    if (!label) return;
    onDeleteLabel(labelId);
  };

  const validateLabelName = (rule: any, value: string) => {
    if (!value || !value.trim()) {
      return Promise.reject('Label name is required');
    }
    
    if (value.trim().length < 2) {
      return Promise.reject('Label name must be at least 2 characters');
    }
    
    if (value.trim().length > 20) {
      return Promise.reject('Label name must be less than 20 characters');
    }
    
    const existingLabel = labels.find(label => 
      label.name.toLowerCase() === value.trim().toLowerCase() && 
      label.id !== editingLabel
    );
    
    if (existingLabel) {
      return Promise.reject('A label with this name already exists');
    }
    
    return Promise.resolve();
  };

  return (
    <Modal
      title={
        <Space>
          <TagOutlined />
          <span>Manage Labels</span>
        </Space>
      }
      open={isOpen}
      onCancel={onClose}
      width={800}
      footer={null}
      destroyOnClose
    >
      <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
        {/* Create New Label Form */}
        <Card
          title="Create New Label"
          style={{ marginBottom: 24 }}
          size="small"
        >
          <Form
            form={createForm}
            layout="vertical"
            onFinish={handleSaveCreate}
            initialValues={{ color: labelColors[0] }}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Form.Item
                name="name"
                rules={[{ validator: validateLabelName }]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input placeholder="Label name" maxLength={20} />
              </Form.Item>
              
              <Form.Item name="color" style={{ marginBottom: 0 }}>
                <ColorPicker
                  presets={[
                    {
                      label: 'Recommended',
                      colors: labelColors,
                    },
                  ]}
                />
              </Form.Item>
              
              <Button
                type="primary"
                htmlType="submit"
                icon={<PlusOutlined />}
              >
                Create
              </Button>
            </Space.Compact>
            
            <Form.Item name="description" style={{ marginTop: 8, marginBottom: 0 }}>
              <Input placeholder="Description (optional)" maxLength={100} />
            </Form.Item>
          </Form>
        </Card>

        {/* Existing Labels */}
        <div>
          <Title level={4}>
            Your Labels ({labels.length})
          </Title>
          
          {labels.length === 0 ? (
            <Empty
              image={<TagOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />}
              description={
                <div>
                  <Text>No labels created yet</Text>
                  <br />
                  <Text type="secondary">Create your first label above to get started organizing your emails</Text>
                </div>
              }
            />
          ) : (
            <List
              dataSource={labels}
              renderItem={(label) => (
                <List.Item>
                  {editingLabel === label.id ? (
                    <Card style={{ width: '100%' }} size="small">
                      <Form
                        form={editForm}
                        layout="vertical"
                        onFinish={handleSaveEdit}
                      >
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Space.Compact style={{ width: '100%' }}>
                            <Form.Item
                              name="name"
                              rules={[{ validator: validateLabelName }]}
                              style={{ flex: 1, marginBottom: 0 }}
                            >
                              <Input placeholder="Label name" maxLength={20} />
                            </Form.Item>
                            
                            <Form.Item name="color" style={{ marginBottom: 0 }}>
                              <ColorPicker
                                presets={[
                                  {
                                    label: 'Recommended',
                                    colors: labelColors,
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Space.Compact>
                          
                          <Form.Item name="description" style={{ marginBottom: 16 }}>
                            <Input placeholder="Description (optional)" maxLength={100} />
                          </Form.Item>
                          
                          <Space>
                            <Button
                              type="primary"
                              htmlType="submit"
                              icon={<CheckOutlined />}
                              size="small"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={handleCancelEdit}
                              icon={<CloseOutlined />}
                              size="small"
                            >
                              Cancel
                            </Button>
                          </Space>
                        </Space>
                      </Form>
                    </Card>
                  ) : (
                    <Card
                      style={{ width: '100%' }}
                      size="small"
                      title={
                        <Space>
                          <div
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              backgroundColor: label.color,
                            }}
                          />
                          <span>{label.name}</span>
                          {label.isSystem && (
                            <Tag color="blue" size="small">System</Tag>
                          )}
                        </Space>
                      }
                      extra={
                        <Space>
                          <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(label)}
                            size="small"
                          />
                          <Popconfirm
                            title="Delete label"
                            description={`Are you sure you want to delete "${label.name}"? This will remove it from all emails.`}
                            onConfirm={() => handleDeleteLabel(label.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button
                              type="text"
                              icon={<DeleteOutlined />}
                              danger
                              size="small"
                            />
                          </Popconfirm>
                        </Space>
                      }
                    >
                      {label.description && (
                        <Text type="secondary">{label.description}</Text>
                      )}
                    </Card>
                  )}
                </List.Item>
              )}
            />
          )}
        </div>
      </div>
      
      <Divider style={{ margin: '16px 0' }} />
      
      <div style={{ textAlign: 'right' }}>
        <Button type="primary" onClick={onClose}>
          Done
        </Button>
      </div>
    </Modal>
  );
};

export default LabelManager;