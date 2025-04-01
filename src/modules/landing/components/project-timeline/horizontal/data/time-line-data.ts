interface TimelineItem {
  id: number
  title: string
  date: string
  status: 'completed' | 'in-progress' | 'pending'
  description: string
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Research & Planning',
    date: 'January 2023',
    status: 'completed',
    description:
      'Market research, competitor analysis, and initial project planning completed.'
  },
  {
    id: 2,
    title: 'Design Phase',
    date: 'March 2023',
    status: 'completed',
    description: 'UI/UX design, wireframing, and prototyping finalized.'
  },
  {
    id: 3,
    title: 'Development Sprint 1',
    date: 'May 2023',
    status: 'completed',
    description: 'Core functionality and basic features implemented.'
  },
  {
    id: 4,
    title: 'Development Sprint 2',
    date: 'July 2023',
    status: 'in-progress',
    description: 'Advanced features and integrations currently in development.'
  },
  {
    id: 5,
    title: 'Testing & QA',
    date: 'September 2023',
    status: 'pending',
    description: 'Comprehensive testing and quality assurance planned.'
  },
  {
    id: 6,
    title: 'Launch',
    date: 'November 2023',
    status: 'pending',
    description: 'Official product launch and marketing campaign.'
  },
  {
    id: 7,
    title: 'Post-Launch Support',
    date: 'December 2023',
    status: 'pending',
    description: 'Ongoing support and bug fixes after initial release.'
  },
  {
    id: 8,
    title: 'Feature Expansion',
    date: 'January 2024',
    status: 'pending',
    description: 'Development of additional features based on user feedback.'
  },
  {
    id: 9,
    title: 'Performance Optimization',
    date: 'February 2024',
    status: 'pending',
    description: 'Improving application performance and scalability.'
  },
  {
    id: 10,
    title: 'Major Update',
    date: 'March 2024',
    status: 'pending',
    description: 'Release of version 2.0 with significant enhancements.'
  },
  {
    id: 11,
    title: 'International Expansion',
    date: 'April 2024',
    status: 'pending',
    description: 'Localization and adaptation for international markets.'
  },
  {
    id: 12,
    title: 'Enterprise Features',
    date: 'May 2024',
    status: 'pending',
    description: 'Development of features for enterprise clients.'
  }
]
