import { combineReducers } from 'redux';
import printers from './printers';
import categories from './categories';
import application from './application';

const rootReducer = combineReducers({
  printers,
  categories,
  application
});

export default rootReducer;
