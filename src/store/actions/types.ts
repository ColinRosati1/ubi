import { AxiosResponse } from 'axios';
import { Ubi } from 'types';

export enum ActionType {
  fetchRequest = 'UBI_FETCH_REQUESTED',
  fetchUbis = 'UBI_FETCH_SUCCEED',
  fetchUbiFailed = 'UBI_FETCH_FAILED',
  ubiFilter = 'UBI_FILTER',
}

export interface FetchUbisAction {
  type: ActionType;
  payload: Promise<AxiosResponse<Ubi[]>> | string;
}

export type Action = FetchUbisAction;
