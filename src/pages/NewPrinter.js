import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";
import { printerList, printerListStatus } from '../selectors';

const NewPrinter = () => {
  const history = useHistory();
  const location = useLocation();
  const dispath = useDispatch();
  const printers = useSelector(state => printerList(state));
  const status = useSelector(state => printerListStatus(state));

  console.log({history})
  console.log({location})

  return (
    <section className="section-list">
      Create new printer
    </section>
  )
}

export default NewPrinter
