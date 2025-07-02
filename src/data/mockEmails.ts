import { Email } from '../types/email';

export const mockEmails: Email[] = [
  {
    id: '1',
    sender: 'Sarah Johnson',
    senderEmail: 'sarah.johnson@company.com',
    subject: 'Q4 Marketing Campaign Review',
    preview: 'Hi team, I wanted to share the latest updates on our Q4 marketing campaign performance. The results have been quite impressive...',
    timestamp: '2024-01-15T16:45:00Z',
    isStarred: true,
    isRead: false,
    intentLabel: 'report',
    customLabels: ['work', 'important'],
    messages: [
      {
        id: '1-1',
        sender: 'Sarah Johnson',
        senderEmail: 'sarah.johnson@company.com',
        to: ['marketing-team@company.com', 'john.doe@company.com'],
        cc: ['manager@company.com'],
        subject: 'Q4 Marketing Campaign Review',
        content: `Hi team,

I wanted to share the latest updates on our Q4 marketing campaign performance. The results have been quite impressive, and I think we should discuss the key learnings for our upcoming campaigns.

Here are the highlights:
• 35% increase in engagement compared to Q3
• 28% improvement in conversion rates
• $125K additional revenue generated

I've attached the detailed report and analytics spreadsheet for your review. Let's schedule a meeting next week to discuss the strategy for Q1 2024.

Best regards,
Sarah`,
        timestamp: '2024-01-15T14:30:00Z',
        isRead: false,
      },
      {
        id: '1-2',
        sender: 'John Doe',
        senderEmail: 'john.doe@company.com',
        to: ['sarah.johnson@company.com', 'marketing-team@company.com'],
        cc: ['manager@company.com'],
        subject: 'Re: Q4 Marketing Campaign Review',
        content: `Sarah,

These results are fantastic! The 35% engagement increase is particularly impressive. I'd like to understand more about which specific campaigns drove these results.

A few questions for our meeting:
1. Which channels performed best?
2. What was our cost per acquisition?
3. How do these numbers compare to our initial projections?

I'm available for the meeting next Tuesday or Wednesday afternoon.

Thanks for the great work!
John`,
        timestamp: '2024-01-15T15:20:00Z',
        isRead: false,
      },
      {
        id: '1-3',
        sender: 'Manager',
        senderEmail: 'manager@company.com',
        to: ['sarah.johnson@company.com', 'john.doe@company.com', 'marketing-team@company.com'],
        subject: 'Re: Q4 Marketing Campaign Review',
        content: `Team,

Excellent work on Q4! These results exceed our expectations and demonstrate the team's dedication and strategic thinking.

Sarah, please prepare a presentation for the board meeting next Friday. Include:
- Detailed performance metrics
- ROI analysis
- Key success factors
- Recommendations for Q1 2024

John, your questions are spot-on. Let's make sure we have comprehensive answers for the board.

Looking forward to our strategy session.

Best,
Manager`,
        timestamp: '2024-01-15T16:45:00Z',
        isRead: false,
      },
    ],
  },
  {
    id: '2',
    sender: 'David Chen',
    senderEmail: 'david.chen@techcorp.com',
    subject: 'Project Timeline Update - Urgent',
    preview: 'Hello everyone, There have been some changes to the project timeline that I need to communicate immediately...',
    timestamp: '2024-01-15T13:45:00Z',
    isStarred: false,
    isRead: false,
    intentLabel: 'announcement',
    customLabels: ['work', 'urgent'],
    messages: [
      {
        id: '2-1',
        sender: 'David Chen',
        senderEmail: 'david.chen@techcorp.com',
        to: ['dev-team@techcorp.com', 'project-managers@techcorp.com'],
        cc: ['stakeholders@techcorp.com'],
        subject: 'Project Timeline Update - Urgent',
        content: `Hello everyone,

There have been some changes to the project timeline that I need to communicate immediately. Due to the client's new requirements, we need to adjust our delivery schedule.

New Timeline:
- Phase 1: January 25th (was January 20th)
- Phase 2: February 15th (was February 10th)
- Final Delivery: March 1st (was February 25th)

I understand this affects everyone's schedule. Let's have a quick standup tomorrow at 9 AM to realign our tasks and discuss resource allocation.

Please confirm your availability.

Thanks,
David`,
        timestamp: '2024-01-15T13:45:00Z',
        isRead: false,
      },
    ],
  },
  {
    id: '3',
    sender: 'Emma Rodriguez',
    senderEmail: 'emma.rodriguez@startup.io',
    subject: 'Welcome to the Team!',
    preview: 'Hi there! Welcome to our amazing team. We are so excited to have you on board and can\'t wait to see what we\'ll accomplish...',
    timestamp: '2024-01-15T11:20:00Z',
    isStarred: true,
    isRead: true,
    intentLabel: 'announcement',
    customLabels: ['personal'],
    messages: [
      {
        id: '3-1',
        sender: 'Emma Rodriguez',
        senderEmail: 'emma.rodriguez@startup.io',
        to: ['newbie@startup.io'],
        cc: ['hr@startup.io', 'team-leads@startup.io'],
        subject: 'Welcome to the Team!',
        content: `Hi there!

Welcome to our amazing team. We are so excited to have you on board and can't wait to see what we'll accomplish together.

Your first week schedule:
- Monday: Orientation and team introductions
- Tuesday: Technical setup and tool access
- Wednesday: Project briefings with team leads
- Thursday: Shadow experienced team members
- Friday: First team meeting and Q&A session

If you have any questions or need anything, please don't hesitate to reach out. We're here to help you succeed!

Looking forward to working with you,
Emma`,
        timestamp: '2024-01-15T11:20:00Z',
        isRead: true,
      },
    ],
  },
  {
    id: '4',
    sender: 'Michael Brown',
    senderEmail: 'michael.brown@consulting.com',
    subject: 'Client Meeting Rescheduled',
    preview: 'Good morning, I hope this email finds you well. I need to inform you that our client meeting originally scheduled for tomorrow...',
    timestamp: '2024-01-15T09:15:00Z',
    isStarred: false,
    isRead: true,
    intentLabel: 'meeting',
    customLabels: ['work', 'clients'],
    messages: [
      {
        id: '4-1',
        sender: 'Michael Brown',
        senderEmail: 'michael.brown@consulting.com',
        to: ['project-team@consulting.com'],
        subject: 'Client Meeting Rescheduled',
        content: `Good morning,

I hope this email finds you well. I need to inform you that our client meeting originally scheduled for tomorrow has been rescheduled due to an unexpected conflict on their end.

New Meeting Details:
- Date: January 18th, 2024
- Time: 2:00 PM - 3:30 PM EST
- Location: Client's office (same as before)
- Attendees: Same team

Please update your calendars accordingly. The agenda remains the same, so no additional preparation is needed beyond what we've already discussed.

Let me know if this new time works for everyone.

Best,
Michael`,
        timestamp: '2024-01-15T09:15:00Z',
        isRead: true,
      },
    ],
  },
  {
    id: '5',
    sender: 'Lisa Wang',
    senderEmail: 'lisa.wang@design.studio',
    subject: 'Design Review Feedback',
    preview: 'Hi team, I\'ve completed the review of the latest design mockups and have some feedback to share. Overall, the direction looks great...',
    timestamp: '2024-01-14T18:30:00Z',
    isStarred: false,
    isRead: true,
    intentLabel: 'feedback',
    customLabels: ['work'],
    messages: [
      {
        id: '5-1',
        sender: 'Lisa Wang',
        senderEmail: 'lisa.wang@design.studio',
        to: ['design-team@design.studio'],
        cc: ['client@company.com'],
        subject: 'Design Review Feedback',
        content: `Hi team,

I've completed the review of the latest design mockups and have some feedback to share. Overall, the direction looks great, but there are a few areas where we can make improvements.

Feedback Points:
1. Color scheme: Consider using a slightly darker shade for the primary buttons
2. Typography: The body text could benefit from increased line spacing
3. Mobile responsiveness: Some elements need adjustment for smaller screens
4. User flow: The checkout process could be simplified by one step

I've annotated the designs with specific comments and suggestions. You can access them through the shared Figma link. I've also attached the updated wireframes as PDF files for offline review.

Let's schedule a design review meeting for Wednesday to go through these in detail.

Best,
Lisa`,
        timestamp: '2024-01-14T16:30:00Z',
        isRead: true,
      },
      {
        id: '5-2',
        sender: 'Alex Thompson',
        senderEmail: 'alex.thompson@design.studio',
        to: ['lisa.wang@design.studio', 'design-team@design.studio'],
        cc: ['client@company.com'],
        subject: 'Re: Design Review Feedback',
        content: `Lisa,

Thanks for the comprehensive feedback! I agree with all your points, especially about the mobile responsiveness issues.

I've already started working on the button color adjustments and typography improvements. The mobile fixes will take a bit more time, but I should have them ready by tomorrow.

For the checkout flow simplification, I have a few ideas. Can we discuss this in our Wednesday meeting? I think we can combine steps 3 and 4 without losing any functionality.

I'll update the Figma file with the initial changes by end of day.

Best,
Alex`,
        timestamp: '2024-01-14T18:30:00Z',
        isRead: true,
      },
    ],
  },
  {
    id: '6',
    sender: 'Newsletter Team',
    senderEmail: 'newsletter@techtrends.com',
    subject: 'Weekly Tech Trends - January Edition',
    preview: 'This week in tech: AI breakthroughs, new frameworks, and industry insights you don\'t want to miss...',
    timestamp: '2024-01-14T08:00:00Z',
    isStarred: false,
    isRead: true,
    intentLabel: 'announcement',
    customLabels: ['newsletters'],
    messages: [
      {
        id: '6-1',
        sender: 'Newsletter Team',
        senderEmail: 'newsletter@techtrends.com',
        to: ['subscribers@techtrends.com'],
        subject: 'Weekly Tech Trends - January Edition',
        content: `This week in tech: AI breakthroughs, new frameworks, and industry insights you don't want to miss.

🚀 TOP STORIES
• OpenAI announces new multimodal capabilities
• React 19 beta introduces exciting new features
• Microsoft Azure expands AI services portfolio

💡 TRENDING TOPICS
• Edge computing adoption in enterprise
• Sustainable tech practices gaining momentum
• Remote work tools evolution

📊 MARKET INSIGHTS
• Tech stocks show resilience amid market volatility
• Startup funding rebounds in Q4 2023
• Cloud computing growth exceeds expectations

🔧 DEVELOPER TOOLS
• New VS Code extensions you should try
• GitHub Copilot updates improve code suggestions
• Docker Desktop introduces enhanced security features

Stay ahead of the curve with our curated tech content.

Happy coding!
Tech Trends Team`,
        timestamp: '2024-01-14T08:00:00Z',
        isRead: true,
      },
    ],
  },
  {
    id: '7',
    sender: 'John Doe',
    senderEmail: 'john.doe@company.com',
    subject: 'Follow-up on Marketing Strategy',
    preview: 'Hi Sarah, Following up on our discussion about the Q1 marketing strategy. I have some additional thoughts...',
    timestamp: '2024-01-13T14:20:00Z',
    isStarred: false,
    isRead: true,
    intentLabel: 'general',
    customLabels: ['work'],
    messages: [
      {
        id: '7-1',
        sender: 'John Doe',
        senderEmail: 'john.doe@company.com',
        to: ['sarah.johnson@company.com'],
        cc: ['marketing-team@company.com'],
        subject: 'Follow-up on Marketing Strategy',
        content: `Hi Sarah,

Following up on our discussion about the Q1 marketing strategy. I have some additional thoughts on how we can leverage the Q4 success.

Key areas to focus on:
1. Double down on the high-performing channels
2. Expand our content marketing efforts
3. Invest more in social media advertising
4. Consider influencer partnerships

I think we should also look into automation tools to help scale our efforts. Let me know when you're available to discuss this further.

Best,
John`,
        timestamp: '2024-01-13T14:20:00Z',
        isRead: true,
      },
    ],
  },
];