import { GET_PRINTERS_LIST_START, CHANGE_STEP_PRINTER_WIZARD, CHANGE_PRINTER_CATEGORY_INPUT } from '../consts/actionTypes';

export const getPrinterList = payload => ({
  type: GET_PRINTERS_LIST_START,
  payload
})

export const changeStepPrinterWizard = payload => ({
  type: CHANGE_STEP_PRINTER_WIZARD,
  payload
});
