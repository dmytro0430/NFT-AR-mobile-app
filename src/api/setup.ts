import Axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { API_BASE_URL } from '../../env.json';

const BASE_HEADER_OPTIONS = {
  'Content-Type': 'application/json',
};

const createApi = () => {
  const axios = applyCaseMiddleware(
    Axios.create({
      baseURL: `${API_BASE_URL}`,
      headers: {
        ...BASE_HEADER_OPTIONS,
      },
    }),
  );

  if (__DEV__) {
    axios.interceptors.request.use(request => {
      // eslint-disable-next-line no-console
      console.log(' -> Starting Request', request);
      return request;
    });

    axios.interceptors.response.use(
      response => {
        // eslint-disable-next-line no-console
        console.log('-> Response success:', response);
        return response;
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('-> Response error:', error.message, error);
        throw error;
      },
    );
  }
  return axios;
};

const createPublicAPI = () => {
  return createApi();
};
export const publicApi = createPublicAPI();
