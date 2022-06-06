import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Company } from './company';

export interface CompaniesState {
  data: Company[];
  status: 'idle' | 'loading' | 'failed';
  currentCompany: string;
}

const initialState: CompaniesState = {
  data: [],
  status: 'idle',
  currentCompany: '',
};

export type LoadCompaniesPayloadActions = PayloadAction<{
  sortBy: 'company' | 'score';
  order: 'asc' | 'desc';
}>;

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    loadCompanies: (state, action: LoadCompaniesPayloadActions) => {
      state.status = 'loading';
    },
    loadCompaniesSuccess: (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    },
    loadCompaniesFailed: (state) => {
      state.status = 'failed';
      state.data = [];
    },
    setCurrentCompany: (state, action: PayloadAction<string>) => {
      state.currentCompany = action.payload;
    },
  },
});

export const {
  loadCompanies,
  loadCompaniesSuccess,
  loadCompaniesFailed,
  setCurrentCompany,
} = companiesSlice.actions;

const selectCompanies = (state: RootState) => state.companies.data;

export const selectCompaniesRows = (state: RootState) =>
  selectCompanies(state).map((i) => ({
    company: i.company,
    score: i.score,
  }));

export const selectIsLoading = (state: RootState) =>
  state.companies.status === 'loading';

export const selectIsFail = (state: RootState) =>
  state.companies.status === 'failed';

export const selectCurrentCompany = (state: RootState) =>
  state.companies.data.find(
    (i) => i.company === state.companies.currentCompany
  );

export default companiesSlice.reducer;
