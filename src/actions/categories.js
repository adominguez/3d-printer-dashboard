import { CREATE_CATEGORY_START, GET_CATEGORIES_LIST_START, CHANGE_CATEGORY_INPUT } from '../consts/actionTypes';

export const changeCategoryInput = payload => ({
  type: CHANGE_CATEGORY_INPUT,
  payload
})

export const createCategory = payload => ({
  type: CREATE_CATEGORY_START,
  payload
})
