import {CHANGE_CATEGORY_INPUT } from '../consts/actionTypes';
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
  validationForm: false
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
  }
  return actionTypes[action.type] ? actionTypes[action.type]() : {...state}
}
