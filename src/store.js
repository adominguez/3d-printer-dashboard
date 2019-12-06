import { createStore } from 'redux';
import { MODAL_OPTIONS, MENU_ITEMS, INPUTS_FORM } from './consts';
import { printersDB } from './firebase';



const initialState = {
    ApplicationTitle: 'New application',
    printers: [],
    printerListState: 'LOADING',
    modal: {
      visible: false,
      type: null,
      options: MODAL_OPTIONS['DEFAULT'],
      acceptedModal: false
    },
    newPrinter: INPUTS_FORM['NEW_PRINTER'],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_PRINTER_LIST':
    return {
      ...state,
      printerListState: 'LOADING'
    }
    case 'GET_PRINTER_LIST_DONE':
    return {
      ...state,
      printers : action.printers,
      printerListState: 'DONE'
    }
    case 'GET_PRINTER_LIST_FAILED':
    return {
      ...state,
      printers : action.printers,
      printerListState: 'FAILED'
    }
  case 'SHOW_MODAL':
    return {
      ...state,
      modal : {
        visible: true,
        type: action.modal,
        options: MODAL_OPTIONS[action.modal],
        acceptedModal: false
      }
    }
  case 'HIDE_MODAL':
    return {
      ...state,
      modal : {
        visible: false,
        type: null,
        options: MODAL_OPTIONS['DEFAULT'],
        acceptedModal: false
      }
    }
  case 'ACCEPT_MODAL':
    const modal = state.modal
    return {
      ...state,
      modal : {
        ...modal,
        acceptedModal: true
      }
    }
  case 'SUBMIT_PRINTER':
    printersDB.push(state.newPrinter)
    return {
      ...state,
      modal: {
        visible: false,
        type: null,
        options: MODAL_OPTIONS['DEFAULT'],
        acceptedModal: false
      },
    }
  case 'CHANGE_INPUT_PRINTER_FORM':
    const printer = state.newPrinter;
    printer[action.item.name] = action.item.value;
    if( printer.printerName &&
        printer.printerAsin &&
        printer.printerImage &&
        printer.postLink &&
        printer.amazonLink &&
        printer.gearbestLink &&
        printer.printerDimensions &&
        printer.printerVolume &&
        printer.printerResolution &&
        printer.printerSpeed ) {
          state.modal.options.disabledAcceptButton = false;
    } else {
      state.modal.options.disabledAcceptButton = true;
    }
    return {
      ...state,
      newPrinter : {...printer}
    }
  default:
    return state
  }
}

export default createStore(reducer);
