export interface Company {
  company: string;
  score: number;
  issueTypes: Array<{
    key: string;
    score: number;
    findings: number;
    name: string;
  }>;
}
