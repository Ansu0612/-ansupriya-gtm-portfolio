// Levels are qualitative, not fake percentages: FOUNDATION / STRONG / ADVANCED
export const skillCategories = [
  {
    name: 'GTM Strategy',
    skills: [
      { name: 'ICP Definition', level: 'STRONG' },
      { name: 'TAM Research', level: 'STRONG' },
      { name: 'Segmentation', level: 'STRONG' },
      { name: 'GTM Hypotheses', level: 'STRONG' },
      { name: 'Funnel Thinking', level: 'FOUNDATION' },
    ],
  },
  {
    name: 'Account Intelligence',
    skills: [
      { name: 'Account Research', level: 'STRONG' },
      { name: 'Data Enrichment', level: 'STRONG' },
      { name: 'Firmographic Analysis', level: 'STRONG' },
      { name: 'Persona / Decision-Maker Research', level: 'STRONG' },
      { name: 'Account Scoring & Prioritization', level: 'STRONG' },
    ],
  },
  {
    name: 'Signals',
    skills: [
      { name: 'Buying Signals', level: 'STRONG' },
      { name: 'Trigger-Event Research', level: 'FOUNDATION' },
      { name: 'Signal-to-Action Mapping', level: 'STRONG' },
    ],
  },
  {
    name: 'ABM + Outbound',
    skills: [
      { name: 'ABM Strategy', level: 'FOUNDATION' },
      { name: 'Personalization', level: 'FOUNDATION' },
      { name: 'Outbound Research', level: 'STRONG' },
      { name: 'Sequencing', level: 'FOUNDATION' },
      { name: 'Campaign Design', level: 'FOUNDATION' },
    ],
  },
  {
    name: 'Automation',
    skills: [
      { name: 'Clay', level: 'STRONG' },
      { name: 'Make', level: 'STRONG' },
      { name: 'n8n', level: 'FOUNDATION' },
      { name: 'AI-Assisted Research', level: 'STRONG' },
      { name: 'Workflow Automation / APIs', level: 'STRONG' },
    ],
  },
  {
    name: 'Data + RevOps',
    skills: [
      { name: 'SQL / MySQL', level: 'ADVANCED' },
      { name: 'Excel / Power Query', level: 'ADVANCED' },
      { name: 'Power BI', level: 'STRONG' },
      { name: 'AWS QuickSight', level: 'STRONG' },
      { name: 'Python', level: 'STRONG' },
      { name: 'Looker Studio', level: 'STRONG' },
      { name: 'Google Analytics (GA4)', level: 'FOUNDATION' },
      { name: 'Revenue Analytics & KPI Reporting', level: 'STRONG' },
    ],
  },
]

export const gtmOperatingSystem = [
  'Market', 'ICP', 'Accounts', 'Research', 'Signals', 'Scoring',
  'Activation', 'Pipeline', 'Measurement', 'Learning', 'Iteration',
]
