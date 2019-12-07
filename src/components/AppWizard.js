import React from 'react';
import './AppWizard.scss'

const AppWizard = (props) => {
  const { type, selectedStep, nextStepButtonText, prevStepButtonText, nextStepButtonHidden, prevStepButtonHidden, disabledNextStepButton, disabledPrevStepButton, children, changeStep } = props;

  const newStep = (selectedStep) => {
    const newStepConfig = {
      nextStepButtonHidden: selectedStep === children.length - 1,
      prevStepButtonHidden: selectedStep === 0,
      disabledNextStepButton,
      disabledPrevStepButton,
      selectedStep
    }
    changeStep(newStepConfig);
  }

  const nextStep = () => {
    const newStepVal = selectedStep + 1;

    if (newStepVal < children.length) {
      newStep(newStepVal);
    }
  }

  const prevStep = () => {
    const newStepVal = selectedStep - 1;
    if (newStepVal >= 0) {
      newStep(newStepVal);
    }
  }

  const navigateToStep = (data) => {
    newStep(data);
  }

  return (
    <div className={`wizard-${type || 'tabs'}`}>
      <div className="steps-header">
        {
          children.map((item, key) => {
            return (
              <button disabled={selectedStep < key} className={`${selectedStep === key ? 'wizard-button-selected' : ''}`} key={key} onClick={() => navigateToStep(key)}>
                {
                  item.props.stepIcon ?
                    <i className={`icon fa fa-${item.props.stepIcon} margin-right-4`}></i>
                    :
                    <span>{`${key + 1}. `}</span>
                }
                <span>{item.props.stepName}</span>
              </button>
            )
          })
        }
      </div>
      <div className="steps-body">
        {children[selectedStep]}
      </div>
      <div className="steps-footer">
        <button hidden={prevStepButtonHidden} disabled={disabledPrevStepButton} onClick={prevStep}>
          <span>{prevStepButtonText}</span>
        </button>
        <button hidden={nextStepButtonHidden} disabled={disabledNextStepButton} className="green" onClick={nextStep}>
          <span>{nextStepButtonText}</span>
        </button>
      </div>
    </div>
  );
}

export default AppWizard;
