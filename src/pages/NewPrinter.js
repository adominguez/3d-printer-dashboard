import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";
import { printerList, printerListStatus } from '../selectors';
import AppWizard from '../components/AppWizard';
import AppStep from '../components/AppStep';
import {changeStepPrinterWizard} from '../actions/printers'

const NewPrinter = () => {
  const history = useHistory();
  const location = useLocation();
  const dispath = useDispatch();
  const printers = useSelector(state => printerList(state));
  const status = useSelector(state => printerListStatus(state));
  const createPrinterWizard = useSelector(state => (state.printers.createPrinterWizard));
  const {selectedStep, nextStepButtonText, prevStepButtonText, nextStepButtonHidden, prevStepButtonHidden, disabledNextStepButton, disabledPrevStepButton} = createPrinterWizard

  const changeStep = (step) => {
    dispath(changeStepPrinterWizard(step))
  }

  return (
    <section className="section-list">
      <AppWizard
        nextStepButtonText={nextStepButtonText}
        prevStepButtonText={prevStepButtonText}
        nextStepButtonHidden={nextStepButtonHidden}
        prevStepButtonHidden={prevStepButtonHidden}
        disabledNextStepButton={disabledNextStepButton}
        disabledPrevStepButton={disabledPrevStepButton}
        selectedStep={selectedStep}
        changeStep={changeStep}
      >
        <AppStep hidden={true} stepName="Inicio">
          <div>Hola</div>
        </AppStep>
        <AppStep stepName="Intermedio">
          <div>Adios</div>
        </AppStep>
        <AppStep stepName="Final">
          <div>Adios</div>
        </AppStep>
      </AppWizard>
    </section>
  )
}

export default NewPrinter
