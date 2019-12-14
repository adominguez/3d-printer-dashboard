import axios from 'axios';
import authentication from './authentication';

const baseURL = 'http://localhost:3128/';

export const apiCall = (url, params, headers, method) => axios({
  method,
  url: baseURL + url,
  params: {
    ...params,
    authentication
  },
  headers
});
