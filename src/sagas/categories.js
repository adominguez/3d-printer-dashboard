import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_CATEGORIES_LIST_START, GET_CATEGORIES_LIST_ERROR, GET_CATEGORIES_LIST_DONE, CREATE_CATEGORY_START, CREATE_CATEGORY_DONE, CREATE_CATEGORY_ERROR } from '../consts/actionTypes';
import { apiCall } from '../api';
import { services } from '../consts/services';

export function* getCategoriesList() {
  try {
    const {data : categoriesList} = yield call(apiCall, services.getCategories, null, null, 'GET')
    yield put({
      type: GET_CATEGORIES_LIST_DONE,
      categoriesList
    });
  } catch (error) {
    yield put({
      type: GET_CATEGORIES_LIST_ERROR,
      error
    });
  }
}

export function* createNewCategory(action) {
  try {
    const { categoryName, categoryDescription, productType } = action.payload
    const data = {
      categoryName: categoryName.value,
      categoryDescription : categoryDescription.value,
      productType : productType.value
    }
    const resp = yield call(apiCall, services.createCategory, data, null, 'GET');
    yield put({
      type: CREATE_CATEGORY_DONE,
    });
  } catch (error) {
    yield put({
      type: CREATE_CATEGORY_ERROR,
      error
    });
  }
}

export default function* categories() {
  yield takeLatest(GET_CATEGORIES_LIST_START, getCategoriesList);
  yield takeLatest(CREATE_CATEGORY_START, createNewCategory);
}
