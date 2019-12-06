import { GET_PRINTERS_LIST_START, GET_PRINTERS_LIST_ERROR, GET_PRINTERS_LIST_DONE, CHANGE_STEP_PRINTER_WIZARD } from '../consts/actionTypes';

const initialState = {
  loading: false,
  printerListStatus: 'LOADING', // values: ['LOADING', 'COMPLETED', ERROR]
  createPrinterWizard: {
    selectedStep: 0
  }
}

export default function(state = initialState, action) {
  const actionTypes = {
    [GET_PRINTERS_LIST_START]() {
      return {
        ...state,
        printerListStatus: 'LOADING'
      };
    },
    [GET_PRINTERS_LIST_ERROR]() {
      return {
        ...state,
        printerListStatus: 'ERROR'
      };
    },
    [GET_PRINTERS_LIST_DONE]() {
      const { printerList } = action;
      return {
        ...state,
        printerListStatus: 'COMPLETED',
        printerList

      };
    },
    [CHANGE_STEP_PRINTER_WIZARD]() {
      const { payload : selectedStep } = action;
      return {
        ...state,
        ...state.createPrinterWizard,
        createPrinterWizard: {
          selectedStep
        }
      };
    },
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
