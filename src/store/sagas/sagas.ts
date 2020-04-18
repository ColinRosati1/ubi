import { AxiosResponse } from 'axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { ActionType, Ubi } from 'store/actions';
import { fetchUbiList } from './apis';

export interface FetchUbisAction {
  type: ActionType.fetchUbis;
  payload: Promise<AxiosResponse<Ubi[]>>;
}

function* fetchUbi(action) {
  try {
    const data = yield call(fetchUbiList);
    console.log(data);
    const fetchData: FetchUbisAction = yield put({
      type: ActionType.fetchUbis,
      payload: data,
    });
  } catch (e) {
    yield put({ type: ActionType.fetchUbiFailed, payload: 'Fetch failed' });
  }
}

export function* rootSaga() {
  yield takeEvery(ActionType.fetchRequest, fetchUbi);
}
