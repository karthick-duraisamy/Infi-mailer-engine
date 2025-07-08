import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  Space,
  Form,
  Select,
  DatePicker,
  Switch,
  Divider,
  Badge,
  Typography,
} from 'antd';
import {
  FilterOutlined,
  DownOutlined,
  ClearOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Text } = Typography;

export interface FilterOptions {
  readStatus: 'all' | 'read' | 'unread';
  starred: boolean;
  hasAttachment: boolean;
  sortBy: 'newest' | 'oldest' | 'subject-az' | 'subject-za' | 'sender-az' | 'sender-za' | 'starred-first';
  dateRange: {
    from: string;
    to: string;
  };
  intent: 'all' | 'meetings' | 'notifications' | 'campaigns' | 'support';
}

interface EmailFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const EmailFilters: React.FC<EmailFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
}) => {
  const [open, setOpen] = useState(false);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const updateDateRange = (dates: any) => {
    if (dates && dates.length === 2) {
      onFiltersChange({
        ...filters,
        dateRange: {
          from: dates[0].format('YYYY-MM-DD'),
          to: dates[1].format('YYYY-MM-DD'),
        },
      });
    } else {
      onFiltersChange({
        ...filters,
        dateRange: { from: '', to: '' },
      });
    }
  };

  const hasActiveFilters = () => (
    filters.readStatus !== 'all' ||
    filters.starred ||
    filters.hasAttachment ||
    filters.sortBy !== 'newest' ||
    filters.dateRange.from ||
    filters.dateRange.to ||
    filters.intent !== 'all'
  );

  const filterContent = (
    <div style={{ width: 320, padding: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <div>
          <Text strong>Read Status</Text>
          <Select
            value={filters.readStatus}
            onChange={(value) => updateFilter('readStatus', value)}
            style={{ width: '100%', marginTop: 8 }}
            options={[
              { value: 'all', label: 'All' },
              { value: 'unread', label: 'Unread' },
              { value: 'read', label: 'Read' },
            ]}
          />
        </div>

        <div>
          <Text strong>Quick Filters</Text>
          <div style={{ marginTop: 8 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Starred only</Text>
                <Switch
                  checked={filters.starred}
                  onChange={(checked) => updateFilter('starred', checked)}
                  size="small"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Has attachments</Text>
                <Switch
                  checked={filters.hasAttachment}
                  onChange={(checked) => updateFilter('hasAttachment', checked)}
                  size="small"
                />
              </div>
            </Space>
          </div>
        </div>

        <div>
          <Text strong>Sort by</Text>
          <Select
            value={filters.sortBy}
            onChange={(value) => updateFilter('sortBy', value)}
            style={{ width: '100%', marginTop: 8 }}
            options={[
              { value: 'newest', label: 'Newest first' },
              { value: 'oldest', label: 'Oldest first' },
              { value: 'subject-az', label: 'Subject (A-Z)' },
              { value: 'subject-za', label: 'Subject (Z-A)' },
              { value: 'sender-az', label: 'Sender (A-Z)' },
              { value: 'sender-za', label: 'Sender (Z-A)' },
              { value: 'starred-first', label: 'Starred first' },
            ]}
          />
        </div>

        <div>
          <Text strong>Date Range</Text>
          <RangePicker
            value={
              filters.dateRange.from && filters.dateRange.to
                ? [dayjs(filters.dateRange.from), dayjs(filters.dateRange.to)]
                : null
            }
            onChange={updateDateRange}
            style={{ width: '100%', marginTop: 8 }}
          />
        </div>

        <div>
          <Text strong>Email Type</Text>
          <Select
            value={filters.intent}
            onChange={(value) => updateFilter('intent', value)}
            style={{ width: '100%', marginTop: 8 }}
            options={[
              { value: 'all', label: 'All types' },
              { value: 'new', label: 'New emails' },
              { value: 'meetings', label: 'Meeting invites' },
              { value: 'notifications', label: 'System notifications' },
              { value: 'campaigns', label: 'Marketing campaigns' },
              { value: 'support', label: 'Support requests' },
            ]}
          />
        </div>

        {hasActiveFilters() && (
          <>
            <Divider style={{ margin: '8px 0' }} />
            <Button
              type="link"
              icon={<ClearOutlined />}
              onClick={() => {
                onClearFilters();
                setOpen(false);
              }}
              style={{ padding: 0 }}
            >
              Clear all filters
            </Button>
          </>
        )}
      </Space>
    </div>
  );

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      dropdownRender={() => filterContent}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button>
        <Space>
          <FilterOutlined />
          Filters
          {hasActiveFilters() && <Badge dot />}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default EmailFilters;