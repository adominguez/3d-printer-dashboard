import React, {useState} from 'react';
import './AppInputTextField.scss'

const AppInputTextField = (props) => {
  const { cls, type, labelText, helperText, errorText, onChange, placeholder, requiredText, ...rest } = props;
  const [inputValue, onChangeInputValue] = useState('');
  const [showHelper, onHideHelper] = useState(true);
  const [errorInput, onSetError] = useState(false);

  const onChangeInput = (e) => {
    const validate = e.currentTarget.checkValidity();
    const value = e.currentTarget.value;
    onSetError(!validate);
    onChangeInputValue(value);
    onChange(value, validate);
  }
  const onFocusInput = () => {
    onHideHelper(false)
  }
  const onBlurInput = () => {
    onHideHelper(true)
  }
  return (
    <label className={`inputTextfield ${cls}`}>
      <input {...rest} placeholder={placeholder} className={`${errorInput ? 'invalid-input' : ''}`} type={type || 'text'} onChange={(e) => onChangeInput(e)} onFocus={onFocusInput} onBlur={onBlurInput} />
      <span className={`label ${!placeholder && inputValue === '' ? 'no-placeholder' : ''}`}>{labelText}</span>
      {
        !errorInput &&
        <span className={`${!showHelper ? 'show-helper' : ''} helper`}><i class="icon fa fa-info-circle" /> {helperText}</span>
      }
      <span className={`error-text ${errorInput ? 'show-error' : ''}`}><i class="icon fa fa-exclamation-triangle"/> {inputValue === '' ? requiredText || 'This field is requiered' : errorText || 'This field has errors, please fill it correctly'}</span>
    </label>
  );
}

export default AppInputTextField;
