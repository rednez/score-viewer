import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from './companiesAPI';
import {
  LoadCompaniesPayloadActions,
  loadCompanies,
  loadCompaniesFailed,
  loadCompaniesSuccess,
} from './companiesSlice';
import { Company } from './company';

function* fetchCompanies(action: LoadCompaniesPayloadActions) {
  try {
    const response = (yield call(
      Api.fetchCompanies,
      action.payload
    )) as AxiosResponse<Company[]>;
    yield put({ type: loadCompaniesSuccess.type, payload: response.data });
  } catch (e) {
    yield put({ type: loadCompaniesFailed.type });
  }
}

export default function* companiesSaga() {
  yield takeLatest(loadCompanies.type, fetchCompanies);
}
