import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AppInputTextField from '../components/AppInputTextField'
import {changeCategoryInput, createCategory, loadCategoryList} from '../actions/categories';

function CreatePrinterCategory(props) {
  const {  } = props;
  const dispath = useDispatch();
  const {categoriesList, categoriesListRetry, categoryForm, validationForm} = useSelector(state => state.categories);

  useEffect(() => {
    if (!categoriesList && categoriesListRetry <= 5) {
      dispath(loadCategoryList());
    }
  });

  const onChangeInput = (textInput, value, validate) => {
    dispath(changeCategoryInput({textInput, value, validate}))
  }

  const onSubmitForm = () => {
    dispath(createCategory(categoryForm))
  }

  return (
    <div>
      <div>
        {categoriesList && categoriesList.map(item => {
          return (
            <div>{item.categoryName}</div>
          )
        })}
      </div>
      <div className="submit-form">
        <h3>Inserta una nueva categoría de impresoras</h3>
        <AppInputTextField
          required
          showClearButton
          name="productType"
          placeholder="Inserta el producto de referencia"
          labelText="Producto asociado"
          helperText="Todas las categorías deben de llevar un producto asociado, 3d-printer, material, academy..."
          requiredText="Este campo es requerido, por favor completalo para continuar"
          onChange={onChangeInput}
        />
        <AppInputTextField
          required
          showClearButton
          name="categoryName"
          placeholder="Inserta el nombre de la categoría"
          labelText="Nombre de la categoría"
          helperText="Cada impresora deberá llevar una categoría, rellena este campo para añadir una nueva categoría a impresoras"
          requiredText="Este campo es requerido, por favor completalo para continuar"
          onChange={onChangeInput}
        />
        <AppInputTextField
          required
          showClearButton
          name="categoryDescription"
          placeholder="Inserta la descripción de la categoría"
          labelText="Descripción de la categoría"
          helperText="Inserta una breve descripción de la categoría"
          requiredText="Este campo es requerido, por favor completalo para continuar"
          onChange={onChangeInput}
        />
        <button className="green" disabled={!validationForm} onClick={onSubmitForm}>Create Printer Category</button>
      </div>
    </div>
  );
}

export default CreatePrinterCategory;
