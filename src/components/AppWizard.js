import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

const AppWizard = ({ children, selectedStep, changeStep }) => {

  const newStep = (stepNumber) => {
    changeStep(stepNumber);
  }

  const nextStep = () => {
    const newStepVal = selectedStep + 1;
    if(newStepVal < children.length) {
      newStep(newStepVal);
    }
  }

  const prevStep = () => {
    const newStepVal = selectedStep - 1;
    if(newStepVal >= 0) {
      newStep(newStepVal);
    }
  }

  return (
    <div>
      <div className="steps-header">
        {
          children.map((item, key) => {
            return (
              <button className="green" key={key}>
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
        <button className="green" onClick={prevStep}>
          <span>Prev</span>
        </button>
        <button className="green" onClick={nextStep}>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}

export default AppWizard;
