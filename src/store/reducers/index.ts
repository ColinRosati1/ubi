import { combineReducers } from 'redux';
import { ubiReducer } from './ubisReducer';
import { ubiFilterReducer } from './ubiFilterReducer';
import { Ubi } from 'store/actions';
import { AxiosResponse } from 'axios';

export interface StoreState {
  ubiList: Ubi[] | Promise<AxiosResponse<Ubi[]>> | string;
  ubiFilter: Ubi[] | string;
}

export const initialState = [];

export const rootReducer = combineReducers({
  ubiList: ubiReducer,
  ubiFilter: ubiFilterReducer,
});
