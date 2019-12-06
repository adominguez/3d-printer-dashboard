import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_PRINTERS_LIST_START, GET_PRINTERS_LIST_ERROR, GET_PRINTERS_LIST_DONE } from '../consts/actionTypes';
import { apiCall } from '../api';
import { services } from '../consts/services';

export function* getPrintersList() {
  try {
    const {data : printerList} = yield call(apiCall, services.getPrinters, null, null, 'GET')
    yield put({
      type: GET_PRINTERS_LIST_DONE,
      printerList
    });
  } catch (error) {
    yield put({
      type: GET_PRINTERS_LIST_ERROR,
      error
    });
  }
}

export default function* printers() {
  yield takeLatest(GET_PRINTERS_LIST_START, getPrintersList);
}
