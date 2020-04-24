import { combineReducers } from 'redux';
import { ubiReducer } from './ubisReducer';
import { ubiFilterReducer } from './ubiFilterReducer';

export const rootReducer = combineReducers({
  ubiList: ubiReducer,
  ubiFilter: ubiFilterReducer,
});
