import { all } from 'redux-saga/effects';

import printers from './printers';
import categories from './categories';

export default function* rootSaga() {
	yield all([
    printers(),
    categories()
  ]);
}
