import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas/sagas';
import { ActionType } from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.dispatch({
  type: ActionType.fetchRequest,
  payload: [],
});

export default store;
