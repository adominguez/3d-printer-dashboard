import { get } from 'lodash';

export const printerListStatus = state => get(state, 'printers.printerListStatus');
export const printerList = state => get(state, 'printers.printerList');
export const menuItems = state => get(state, 'application.menuItems');
