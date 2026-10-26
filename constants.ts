
import { Job, Province, JobType } from './types';

export const CATEGORIES = [
  'Banking',
  'Teaching',
  'Medical',
  'IT & Software',
  'Engineering',
  'Armed Forces',
  'Management',
  'Sales & Marketing',
  'Administration'
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Assistant Director (Legal)',
    organization: 'FPSC',
    location: 'Islamabad',
    province: Province.ISLAMABAD,
    type: JobType.GOVERNMENT,
    category: 'Management',
    postedDate: '2024-05-20',
    lastDate: '2024-06-15',
    education: 'LLB with 5 years experience',
    ageLimit: '22 - 35 years',
    description: 'The Federal Public Service Commission (FPSC) is looking for competent professionals to join as Assistant Directors.',
    howToApply: 'Apply online through FPSC official website.',
    source: 'Daily Jang'
  },
  {
    id: '2',
    title: 'Software Engineer',
    organization: 'Tech-Nexus Solutions',
    location: 'Lahore',
    province: Province.PUNJAB,
    type: JobType.PRIVATE,
    category: 'IT & Software',
    postedDate: '2024-05-21',
    lastDate: '2024-06-10',
    education: 'BS Computer Science',
    ageLimit: '22 - 30 years',
    description: 'Join a fast-growing tech firm. Looking for React and Node.js experts.',
    howToApply: 'Send your resume to careers@technexus.pk',
    source: 'LinkedIn'
  },
  {
    id: '3',
    title: 'Captain (Direct Short Service Commission)',
    organization: 'Pakistan Army',
    location: 'Multiple Cities',
    province: Province.PUNJAB,
    type: JobType.GOVERNMENT,
    category: 'Armed Forces',
    postedDate: '2024-05-18',
    lastDate: '2024-06-05',
    education: 'MBBS / BE / MSc',
    ageLimit: '28 years max',
    description: 'Join the pride of the nation. Direct commission for professionals in various fields.',
    howToApply: 'Register online at JoinPakArmy.gov.pk',
    source: 'ISPR Official'
  },
  {
    id: '4',
    title: 'Secondary School Teacher (SST)',
    organization: 'PPSC',
    location: 'Rawalpindi',
    province: Province.PUNJAB,
    type: JobType.GOVERNMENT,
    category: 'Teaching',
    postedDate: '2024-05-22',
    lastDate: '2024-06-20',
    education: 'MA / MSc / M.Ed',
    ageLimit: '21 - 40 years',
    description: 'Punjab Public Service Commission invites applications for permanent teaching positions.',
    howToApply: 'Apply through PPSC online portal.',
    source: 'Daily Express'
  },
  {
    id: '5',
    title: 'Trainee Banker',
    organization: 'HBL Pakistan',
    location: 'Karachi',
    province: Province.SINDH,
    type: JobType.PRIVATE,
    category: 'Banking',
    postedDate: '2024-05-19',
    lastDate: '2024-06-12',
    education: 'Bachelors (Any discipline)',
    ageLimit: '25 years max',
    description: 'HBL is offering a career start for fresh graduates through its Trainee program.',
    howToApply: 'Apply via HBL careers portal.',
    source: 'HBL Website'
  }
];

export const PROVINCES = Object.values(Province);
