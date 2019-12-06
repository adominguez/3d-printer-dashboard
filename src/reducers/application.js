import { MENU_ITEMS } from '../consts/globalConsts'

const initialState = {
  menuItems: MENU_ITEMS
}

export default function(state = initialState, action) {
  const actionTypes = {
    /*[GET_PRINTERS_LIST_START]() {
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
    }*/
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
