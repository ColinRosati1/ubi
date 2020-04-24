import { AxiosResponse } from 'axios';
import { Ubi } from 'types';

export interface StoreState {
  ubiList: Ubi[] | Promise<AxiosResponse<Ubi[]>> | string;
  ubiFilter: Ubi[] | string;
}

export const initialState = [];
