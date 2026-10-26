
export enum JobType {
  GOVERNMENT = 'Government',
  PRIVATE = 'Private',
  INTERNSHIP = 'Internship'
}

export enum Province {
  PUNJAB = 'Punjab',
  SINDH = 'Sindh',
  KPK = 'KPK',
  BALOCHISTAN = 'Balochistan',
  AJK = 'AJK',
  GILGIT = 'Gilgit-Baltistan',
  ISLAMABAD = 'Islamabad'
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  province: Province;
  type: JobType;
  category: string;
  postedDate: string;
  lastDate: string;
  education: string;
  ageLimit: string;
  description: string;
  howToApply: string;
  source: string;
}

export interface SearchFilters {
  keyword: string;
  province: string;
  category: string;
  type: string;
}
