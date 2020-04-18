import { combineReducers } from 'redux';
import { ubiReducer } from './ubisReducer';
import { Ubi } from 'store/actions';
import { AxiosResponse } from 'axios';

export interface StoreState {
  ubiList: Ubi[] | Promise<AxiosResponse<Ubi[]>> | string;
}

export const rootReducer = combineReducers<StoreState>({
  ubiList: ubiReducer,
});
