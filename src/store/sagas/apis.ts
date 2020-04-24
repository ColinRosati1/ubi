import axios from 'axios';
import { Ubi } from 'types';

const url = 'https://ubi-backend-nest.colinrosati1.now.sh/api/get-ubi';

export const fetchUbiList = async (): Promise<Ubi[]> => {
  try {
    const response = await axios.get<Ubi[]>(url);
    return response.data;
  } catch (err) {
    alert(err);
  }
};
