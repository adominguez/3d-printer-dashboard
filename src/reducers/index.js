import { combineReducers } from 'redux';
import printers from './printers';
import application from './application';

const rootReducer = combineReducers({
  printers,
  application
});

export default rootReducer;
