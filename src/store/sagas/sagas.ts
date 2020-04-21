import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType, FetchUbisAction } from 'store/actions';
import { fetchUbiList } from './apis';

function* fetchUbi() {
  try {
    const data = yield call(fetchUbiList);
    yield put<FetchUbisAction>({
      type: ActionType.fetchUbis,
      payload: data,
    });
  } catch (e) {
    yield put<FetchUbisAction>({ type: ActionType.fetchUbiFailed, payload: 'Fetch failed' });
  }
}

export function* rootSaga() {
  yield takeEvery(ActionType.fetchRequest, fetchUbi);
}
