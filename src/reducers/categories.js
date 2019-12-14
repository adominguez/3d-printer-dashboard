import {CHANGE_CATEGORY_INPUT, CREATE_CATEGORY_DONE, CREATE_CATEGORY_ERROR, GET_CATEGORIES_LIST_START, GET_CATEGORIES_LIST_DONE, GET_CATEGORIES_LIST_ERROR } from '../consts/actionTypes';
import _ from 'lodash';

const initialState = {
  categoryForm: {
    categoryName: {
      value: '',
      validate: false
    },
    categoryDescription: {
      value: '',
      validate: false
    },
    productType: {
      value: '3d-printer',
      validate: false
    },
  },
  validationForm: false,
  error: {
    errorMessage: '',
    error: false
  },
  categoriesListRetry: 0
}

export default function(state = initialState, action) {
  const actionTypes = {
    [CHANGE_CATEGORY_INPUT]() {
      const { textInput, value, validate } = action.payload;
      const map = _.map(state.categoryForm, (item, key) => ({item, key}))
      const validationForm = map.find(form => !form.item.validate) ? false : validate ? true : false;
      return {
        ...state,
        categoryForm: {
          ...state.categoryForm,
          [textInput] : {
            value,
            validate
          },
        },
        validationForm
      };
    },
    [CREATE_CATEGORY_DONE]() {
      return {
        ...state,
        categoryForm: initialState.categoryForm,
        validationForm : false
      };
    },
    [CREATE_CATEGORY_ERROR]() {
      const { error } = action.payload;
      return {
        ...state,
        validationForm : false,
        error: {
          errorMessage: error,
          error: true
        }
      };
    },
    [GET_CATEGORIES_LIST_START]() {
      return {
        ...state,
        categoriesListRetry: state.categoriesListRetry + 1
      };
    },
    [GET_CATEGORIES_LIST_DONE]() {
      const { categoriesList } = action;
      return {
        ...state,
        categoriesList,
        categoriesListRetry: 0
      };
    },
    [GET_CATEGORIES_LIST_ERROR]() {
      const { error } = action;
      return {
        ...state,
        error: {
          errorMessage: error,
          error: true
        }
      };
    },
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
