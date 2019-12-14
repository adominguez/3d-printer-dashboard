import { GET_PRINTERS_LIST_START, GET_PRINTERS_LIST_ERROR, GET_PRINTERS_LIST_DONE, CHANGE_STEP_PRINTER_WIZARD } from '../consts/actionTypes';

const initialState = {
  loading: false,
  printerListRetry: 0,
  printerListStatus: 'LOADING', // values: ['LOADING', 'COMPLETED', ERROR]
  createPrinterWizard: {
    selectedStep: 0,
    nextStepButtonText: 'Next',
    prevStepButtonText: 'Prev',
    nextStepButtonHidden: false,
    prevStepButtonHidden: true,
    disabledNextStepButton: false,
    disabledPrevStepButton: false,
  }
}

export default function(state = initialState, action) {
  const actionTypes = {
    [GET_PRINTERS_LIST_START]() {
      return {
        ...state,
        printerListStatus: 'LOADING',
        printerListRetry: state.printerListRetry + 1
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
        printerList,
        printerListRetry: 0
      };
    },
    [CHANGE_STEP_PRINTER_WIZARD]() {
      const { payload : createPrinterWizard } = action;
      return {
        ...state,
        createPrinterWizard: {
          ...state.createPrinterWizard,
          ...createPrinterWizard
        }
      };
    },
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
