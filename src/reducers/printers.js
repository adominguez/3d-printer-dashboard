import { GET_PRINTERS_LIST_START, GET_PRINTERS_LIST_ERROR, GET_PRINTERS_LIST_DONE } from '../consts/actionTypes';

const initialState = {}

export default function(state = initialState, action) {
  const actionTypes = {
    [GET_PRINTERS_LIST_START]() {
      return {
        ...state,
        loading: true,
      };
    },
    [GET_PRINTERS_LIST_ERROR]() {
      return {
        ...state,
        loading: false,
      };
    },
    [GET_PRINTERS_LIST_DONE]() {
      const { printerList } = action;
      return {
        ...state,
        loading: false,
        printerList
      };
    }
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
