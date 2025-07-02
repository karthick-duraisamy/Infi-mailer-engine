import { CustomLabel } from '../types/email';

export const mockCustomLabels: CustomLabel[] = [
  {
    id: 'work',
    name: 'Work',
    color: '#3B82F6', // blue-500
    description: 'Work-related emails',
    createdAt: '2024-01-01T00:00:00Z',
    isSystem: true,
  },
  {
    id: 'personal',
    name: 'Personal',
    color: '#10B981', // green-500
    description: 'Personal emails',
    createdAt: '2024-01-01T00:00:00Z',
    isSystem: true,
  },
  {
    id: 'important',
    name: 'Important',
    color: '#EF4444', // red-500
    description: 'Important emails that need attention',
    createdAt: '2024-01-01T00:00:00Z',
    isSystem: true,
  },
  {
    id: 'travel',
    name: 'Travel',
    color: '#8B5CF6', // purple-500
    description: 'Travel-related emails',
    createdAt: '2024-01-01T00:00:00Z',
    isSystem: true,
  },
  {
    id: 'urgent',
    name: 'Urgent',
    color: '#F59E0B', // amber-500
    description: 'Urgent emails requiring immediate attention',
    createdAt: '2024-01-10T00:00:00Z',
    isSystem: false,
  },
  {
    id: 'clients',
    name: 'Clients',
    color: '#06B6D4', // cyan-500
    description: 'Client communications',
    createdAt: '2024-01-12T00:00:00Z',
    isSystem: false,
  },
  {
    id: 'newsletters',
    name: 'Newsletters',
    color: '#84CC16', // lime-500
    description: 'Newsletter subscriptions',
    createdAt: '2024-01-14T00:00:00Z',
    isSystem: false,
  },
];

export const labelColors = [
  '#3B82F6', // blue-500
  '#10B981', // green-500
  '#EF4444', // red-500
  '#8B5CF6', // purple-500
  '#F59E0B', // amber-500
  '#06B6D4', // cyan-500
  '#84CC16', // lime-500
  '#EC4899', // pink-500
  '#6366F1', // indigo-500
  '#14B8A6', // teal-500
  '#F97316', // orange-500
  '#A855F7', // violet-500
];