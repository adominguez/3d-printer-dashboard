import React, { useState, useRef  } from 'react';
import UseOutsideClick from "./UseOutsideClick";
import './AppInputTextField.scss'

const AppInputTextField = (props) => {
  const { cls = '', type = 'text', readOnly, showClearButton, labelText, value, helperText, errorText='This field has errors, please fill it correctly', placeholder, requiredText='This field is required', optionsField, closedSelected = 'chevron-down', openedSelect = 'chevron-up', onChange, ...rest } = props;
  const textInput = useRef();
  const ref = useRef();
  const [inputValue, onChangeInputValue] = useState(value || '');
  const [showHelper, onHideHelper] = useState(true);
  const [errorInput, onSetError] = useState(false);
  const [showOptionsList, onShowOptionsList] = useState(false);
  const [clearButtonShowed, onShowClearButton] = useState(false);

  const onChangeInput = (e) => {
    const validate = e.currentTarget.checkValidity();
    const value = e.currentTarget.value;
    onSetError(!validate);
    onChangeInputValue(value);
    onChange(value, validate);
    if(showClearButton && !clearButtonShowed) {
      onShowClearButton(true);
    }
  }

  const onFocusInput = () => {
    onHideHelper(false);
    showOptions(true);
    if(showClearButton && !clearButtonShowed) {
      onShowClearButton(true);
    }
  }

  const onBlurInput = () => {
    onHideHelper(true);
    setTimeout(()=> {
      if(showClearButton) {
        onShowClearButton(false);
      }
    }, 200);
  }

  const showOptions = (showOptions) => {
    if(optionsField) {
      onShowOptionsList(showOptions);
    }
  }

  const onSelectOptionsItem = (item) => {
    const validate = textInput.current.checkValidity();
    onChangeInputValue(item.name);
    onChange(item.value, validate);
    setTimeout(()=> {
      showOptions(false);
    }, 200)
  }

  UseOutsideClick(ref, () => {
    showOptions(false);
  });

  const onClearValue = () => {
    const validate = textInput.current.checkValidity();
    onChangeInputValue('');
    onChange('', validate);
    onShowClearButton(false);
  }

  return (
    <label ref={ref} className={`inputTextfield ${cls}`}>
      <input {...rest} ref={textInput} readOnly={optionsField ? true : readOnly} value={inputValue} placeholder={placeholder} className={`${errorInput ? 'invalid-input' : ''} ${optionsField ? 'drop-down-input' : ''}`} type={type} onChange={(e) => onChangeInput(e)} onFocus={onFocusInput} onBlur={onBlurInput} />
      <div className="input-buttons">
        {
          !optionsField && showClearButton && clearButtonShowed && inputValue !== '' &&
          <button type="button" className="clear-value" onClick={onClearValue}><i className="icon fa fa-times" /></button>
        }
        {
          optionsField &&
          <span><i className={`icon fa fa-${showOptionsList ? openedSelect : closedSelected} ${!showOptionsList ? 'opened-select' : ''}`} /></span>
        }
      </div>
      <span className={`label ${!placeholder && inputValue === '' ? 'no-placeholder' : ''}`}>{labelText}</span>
      {
        !errorInput && !optionsField &&
        <span className={`${!showHelper ? 'show-helper' : ''} helper`}><i className="icon fa fa-info-circle" /> {helperText}</span>
      }
      {
        optionsField && showOptionsList &&
        <ul className="drop-down-list">
          {
            optionsField.map((item, key) => (
              <li key={key}><button  className="drop-down-list-button" type="button" onClick={() => onSelectOptionsItem(item)}>{item.name}</button></li>
            ))
          }
        </ul>
      }
      <span className={`error-text ${errorInput ? 'show-error' : ''}`}><i className="icon fa fa-exclamation-triangle" /> {inputValue === '' ? requiredText : errorText}</span>
    </label>
  );
}

export default AppInputTextField;
