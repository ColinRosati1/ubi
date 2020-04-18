import { AxiosResponse } from 'axios';

export enum ActionType {
  fetchRequest = 'UBI_FETCH_REQUESTED',
  fetchUbis = 'UBI_FETCH_SUCCEED',
  fetchUbiFailed = 'UBI_FETCH_FAILED',
}

export interface Ubi {
  id: number;
  effects?: string;
  endDate?: string;
  funding?: string;
  income?: string;
  incomeType?: string;
  isActive?: boolean;
  label?: string;
  location?: string;
  organization?: string;
  sample?: string;
  sampleAge?: string;
  startDate?: string;
  title?: string;
}

export interface FetchUbisAction {
  type: ActionType;
  payload: Promise<AxiosResponse<Ubi[]>> | string;
}

export type Action = FetchUbisAction;
