import { get } from 'lodash';

export const isPrinterListLoading = state => get(state, 'printers.loading');
export const printerList = state => get(state, 'printers.printerList');
