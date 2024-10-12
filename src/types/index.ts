export interface Talent {
  id: string;
  name: string;
  email: string;
  phone: string;
  cv: string;
  coverLetter: string;
  linkedInUrl: string;
  skills: string[];
  salaryClaim: number;
  noticePeriod: string;
  lastUpdate: Date;
  chatHistory: string[];
  interviewFeedback: string;
  ratings: number;
}

export interface Requirement {
  id: string;
  jobTitle: string;
  company: string;
  description: string;
  requiredSkills: string[];
  cultureFit: string[];
  salaryRange: {
    min: number;
    max: number;
  };
}

export interface MatchResult {
  talentId: string;
  requirementId: string;
  skillsMatchScore: number;
  cultureMatchScore: number;
  overallMatchScore: number;
}