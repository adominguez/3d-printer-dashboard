import axios from 'axios';

const baseURL = 'http://localhost:3128/';

export const apiCall = (url, params, headers, method) => axios({
  method,
  url: baseURL + url,
  params,
  headers
});
