import axios, { AxiosPromise } from 'axios';
import { Ubi } from 'store/actions';

const url = 'https://ubi-backend-nest.colinrosati1.now.sh/api/get-ubi';

export const fetchUbiList = (): Promise<Ubi[]> => {
  const _data = axios.get<Ubi[]>(url).then(res => res.data);
  return _data;
};
