import { all } from 'redux-saga/effects';

import printers from './printers';

export default function* rootSaga() {
	yield all([
    printers()
  ]);
}
