import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  List,
  Typography,
  Space,
  Switch,
  Empty,
  Divider,
  Card,
  Tag,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Text, Title } = Typography;

interface SignatureSetupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignatureSetup: React.FC<SignatureSetupProps> = ({ isOpen, onClose }) => {
  const [signatures, setSignatures] = useState([
    {
      id: 1,
      name: "Default",
      content:
        "Best regards,\nJohn Doe\nSoftware Engineer\njohn.doe@company.com",
      isDefault: true,
    },
    { id: 2, name: "Casual", content: "Thanks!\nJohn", isDefault: false },
  ]);
  const [editingSignature, setEditingSignature] = useState<number | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const defaultSignature = signatures.find(sig => sig.isDefault);
    if (defaultSignature) {
      sessionStorage.setItem("defaultSignature", defaultSignature.content);
    }
  }, [signatures]);

  const handleEdit = (signature: any) => {
    setEditingSignature(signature.id);
    setIsCreatingNew(false);
    form.setFieldsValue({
      name: signature.name,
      content: signature.content,
    });
  };

  const handleCreateNew = () => {
    setEditingSignature(null);
    setIsCreatingNew(true);
    form.resetFields();
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      
      if (isCreatingNew) {
        const newSignature = {
          id: Date.now(),
          name: values.name,
          content: values.content,
          isDefault: signatures.length === 0,
        };
        setSignatures([...signatures, newSignature]);
      } else if (editingSignature) {
        setSignatures(
          signatures.map((sig) =>
            sig.id === editingSignature
              ? { ...sig, name: values.name, content: values.content }
              : sig
          )
        );
      }
      
      setEditingSignature(null);
      setIsCreatingNew(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleDelete = (id: number) => {
    setSignatures(signatures.filter((sig) => sig.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setSignatures(
      signatures.map((sig) => ({ ...sig, isDefault: sig.id === id }))
    );
  };

  const handleCancel = () => {
    setEditingSignature(null);
    setIsCreatingNew(false);
    form.resetFields();
  };

  const currentContent = Form.useWatch('content', form) || '';

  return (
    <Modal
      title="Email Signatures"
      open={isOpen}
      onCancel={onClose}
      width={800}
      footer={null}
      destroyOnClose
    >
      <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
        {isCreatingNew || editingSignature ? (
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSave}
          >
            <Form.Item
              name="name"
              label="Signature Name"
              rules={[{ required: true, message: 'Please enter signature name' }]}
            >
              <Input placeholder="Enter signature name" />
            </Form.Item>

            <Form.Item
              label={
                <Space>
                  <span>Signature Content</span>
                  <Button
                    type="link"
                    size="small"
                    icon={previewMode ? <EditOutlined /> : <EyeOutlined />}
                    onClick={() => setPreviewMode(!previewMode)}
                  >
                    {previewMode ? "Edit" : "Preview"}
                  </Button>
                </Space>
              }
            >
              {previewMode ? (
                <div className="signature-preview">
                  {currentContent || "No content yet..."}
                </div>
              ) : (
                <Form.Item
                  name="content"
                  rules={[{ required: true, message: 'Please enter signature content' }]}
                  style={{ marginBottom: 0 }}
                >
                  <TextArea
                    rows={6}
                    placeholder="Enter your signature content"
                  />
                </Form.Item>
              )}
            </Form.Item>

            <Space style={{ marginTop: 16 }}>
              <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
                Save Signature
              </Button>
              <Button onClick={handleCancel} icon={<CloseOutlined />}>
                Cancel
              </Button>
            </Space>
          </Form>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Title level={4} style={{ margin: 0 }}>
                Your Signatures ({signatures.length})
              </Title>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreateNew}
              >
                Create New
              </Button>
            </div>

            {signatures.length === 0 ? (
              <Empty
                image={<EditOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />}
                description={
                  <div>
                    <Text>No signatures created yet</Text>
                    <br />
                    <Text type="secondary">Click "Create New" to add your first signature</Text>
                  </div>
                }
              />
            ) : (
              <List
                dataSource={signatures}
                renderItem={(signature) => (
                  <List.Item>
                    <Card
                      style={{ width: '100%' }}
                      title={
                        <Space>
                          <span>{signature.name}</span>
                          {signature.isDefault && (
                            <Tag color="blue">Default</Tag>
                          )}
                        </Space>
                      }
                      extra={
                        <Space>
                          {!signature.isDefault && (
                            <Button
                              type="link"
                              size="small"
                              onClick={() => handleSetDefault(signature.id)}
                            >
                              Set Default
                            </Button>
                          )}
                          <Button
                            type="link"
                            size="small"
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(signature)}
                          >
                            Edit
                          </Button>
                          {!signature.isDefault && (
                            <Popconfirm
                              title="Delete signature"
                              description="Are you sure you want to delete this signature?"
                              onConfirm={() => handleDelete(signature.id)}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button
                                type="link"
                                size="small"
                                icon={<DeleteOutlined />}
                                danger
                              >
                                Delete
                              </Button>
                            </Popconfirm>
                          )}
                        </Space>
                      }
                    >
                      <div className="signature-preview">
                        {signature.content}
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SignatureSetup;