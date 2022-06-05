import axios from 'axios';
import { Company } from './company';

export function fetchCompanies(params: {
  sortBy: 'company' | 'score';
  order: 'asc' | 'desc';
}): Promise<Company[]> {
  return axios.get('http://localhost:3002/api/companies', { params });
}
