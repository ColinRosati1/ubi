import { combineReducers } from 'redux';
import { ubiReducer } from './ubisReducer';
import { Ubi } from 'store/actions';

export interface StoreState {
  ubiList: Ubi[];
}

export const rootReducer = combineReducers<StoreState>({
  ubiList: ubiReducer,
});
