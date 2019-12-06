import { GET_PRINTERS_LIST_START, GET_PRINTERS_LIST_ERROR, GET_PRINTERS_LIST_DONE } from '../consts/actionTypes';

export const getPrinterList = payload => ({
  type: GET_PRINTERS_LIST_START,
  payload
})
