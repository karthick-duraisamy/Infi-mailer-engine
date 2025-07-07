
# Infiniti - Modern Email Application Interface

A modern, responsive email client interface built with React, TypeScript, and Tailwind CSS. This application provides a Gmail-like experience with advanced features including AI-powered reply generation, custom labeling, smart filtering, and intent-based email classification.

## 🏗️ Application Architecture

### Frontend Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                        React App                           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Header    │ │   Sidebar   │ │    Main Content Area    │ │
│  │             │ │             │ │ ┌─────────────────────┐ │ │
│  │ - Search    │ │ - Navigation│ │ │    Email List       │ │ │
│  │ - Filters   │ │ - Labels    │ │ │ - Email Items       │ │ │
│  │ - Settings  │ │ - Compose   │ │ │ - Bulk Actions      │ │ │
│  └─────────────┘ └─────────────┘ │ └─────────────────────┘ │ │
│                                  │ ┌─────────────────────┐ │ │
│                                  │ │ Conversation Thread │ │ │
│                                  │ │ - Message History   │ │ │
│                                  │ │ - AI Reply          │ │ │
│                                  │ │ - Actions           │ │ │
│                                  │ └─────────────────────┘ │ │
│                                  └─────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                       Modal Layer                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │ ComposeModal│ │LabelManager │ │    Other Modals         │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy
```
App
├── Header
│   └── EmailFilters
├── Sidebar
├── EmailList
│   └── EmailLabelActions
│       └── LabelSelector
├── ConversationThread
│   └── EmailLabelActions
├── ComposeModal
└── LabelManager
    └── LabelSelector
```

### State Management Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                    App Component State                     │
├─────────────────────────────────────────────────────────────┤
│ • emails: Email[]                                          │
│ • selectedEmail: Email | null                              │
│ • activeItem: string                                       │
│ • customLabels: CustomLabel[]                              │
│ • checkedEmails: Set<string>                               │
│ • searchQuery: string                                      │
│ • filters: FilterOptions                                   │
│ • aiReplyState: AiReplyState                               │
│ • UI States (modals, sidebar, etc.)                       │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Technical Stack

### Core Technologies
- **React 18.3.1** - UI library with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Development Tools
- **ESLint 9.9.1** - Code linting and quality assurance
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### UI Components
- **Lucide React 0.344.0** - Modern icon library
- Custom React components with TypeScript interfaces

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ComposeModal.tsx     # Email composition interface
│   ├── ConversationThread.tsx # Email conversation view
│   ├── EmailFilters.tsx     # Advanced filtering controls
│   ├── EmailLabelActions.tsx # Label management actions
│   ├── EmailList.tsx        # Email list display
│   ├── Header.tsx           # Top navigation bar
│   ├── LabelManager.tsx     # Label management modal
│   ├── LabelSelector.tsx    # Label selection component
│   └── Sidebar.tsx          # Left navigation sidebar
├── data/                # Mock data and constants
│   ├── mockEmails.ts        # Sample email data
│   └── mockLabels.ts        # Sample label data
├── types/               # TypeScript type definitions
│   └── email.ts             # Email and label type definitions
├── App.tsx              # Main application component
├── index.css            # Global styles and Tailwind imports
├── main.tsx             # Application entry point
└── vite-env.d.ts        # Vite environment types
```

## 🔧 Core Features

### 1. Email Management
- **Inbox Organization**: Inbox, Sent, Drafts, Starred, Snoozed
- **Email Threading**: Grouped conversation views
- **Bulk Operations**: Multi-select email actions
- **Read/Unread States**: Visual indicators and filtering

### 2. Advanced Filtering & Search
- **Text Search**: Subject, sender, content, and label search
- **Smart Filters**: Read status, starred, attachments, date range
- **Intent-Based Classification**: Meeting invites, notifications, campaigns, support
- **Sorting Options**: Date, subject, sender, starred-first

### 3. Custom Labeling System
- **Dynamic Labels**: Create, edit, delete custom labels
- **Label Assignment**: Bulk label operations
- **Color Coding**: Visual label identification
- **Label Management**: Dedicated label manager interface

### 4. AI-Powered Features
- **Smart Replies**: Context-aware response generation
- **Tone Selection**: Professional, friendly, concise tones
- **Intent Detection**: Automatic email categorization
- **Response Suggestions**: AI-generated reply options

### 5. Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Mobile gesture support
- **Collapsible Sidebar**: Space-efficient navigation
- **Adaptive Layout**: Fluid grid system

## 🔄 Data Flow

### Email Operations
```
User Action → Component Handler → State Update → UI Re-render
    ↓              ↓                 ↓              ↓
Select Email → handleEmailSelect → setSelectedEmail → ConversationThread
Star Email   → handleStarToggle  → setEmails       → EmailList
Filter       → handleFiltersChange → setFilters    → filteredEmails
```

### Filter Processing Pipeline
```
Raw Emails → Section Filter → Search Filter → Advanced Filters → Sorting → Display
    ↓             ↓              ↓               ↓              ↓         ↓
mockEmails → activeItem → searchQuery → FilterOptions → sortBy → EmailList
```

## 🎨 Design System

### Color Scheme
- **Primary**: Blue variants for actions and highlights
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Yellow for starred items
- **Status**: Green (success), Red (danger), Orange (warning)

### Typography
- **Font Family**: System fonts (Inter, Segoe UI, Arial)
- **Sizes**: 12px-24px with responsive scaling
- **Weights**: 400 (normal), 500 (medium), 600 (semibold)

### Spacing System
- **Base Unit**: 4px (0.25rem)
- **Common Spacings**: 4px, 8px, 12px, 16px, 24px, 32px
- **Responsive**: Tailwind's responsive spacing classes

## 🚀 Development Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern browser with ES6+ support

### Installation & Setup
```bash
# Clone the repository
git clone <repository-url>
cd infiniti-email-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔮 Future Enhancements

### Planned Features
- **Real Backend Integration**: API connectivity for email services
- **Offline Support**: PWA capabilities with service workers
- **Real-time Updates**: WebSocket integration for live email updates
- **Advanced AI**: Better intent detection and reply generation
- **Keyboard Shortcuts**: Gmail-like keyboard navigation
- **Dark Mode**: Theme switching capability
- **Email Templates**: Predefined email templates
- **Calendar Integration**: Meeting scheduling features

### Performance Optimizations
- **Virtual Scrolling**: Handle large email lists efficiently
- **Code Splitting**: Lazy load components and routes
- **Memoization**: Optimize re-renders with React.memo
- **Service Worker**: Cache strategies for better performance

## 📝 API Design (Future)

### Planned Endpoints
```typescript
GET    /api/emails              # Fetch emails with pagination
POST   /api/emails              # Send new email
PUT    /api/emails/:id          # Update email (read status, labels)
DELETE /api/emails/:id          # Delete email

GET    /api/labels              # Fetch custom labels
POST   /api/labels              # Create new label
PUT    /api/labels/:id          # Update label
DELETE /api/labels/:id          # Delete label

POST   /api/ai/reply            # Generate AI reply
POST   /api/ai/classify         # Classify email intent
```

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Use functional components with hooks
3. Implement responsive design principles
4. Write descriptive commit messages
5. Add type definitions for new features

### Code Style
- Use ESLint configuration provided
- Follow Tailwind CSS utility-first approach
- Implement proper error handling
- Add JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
