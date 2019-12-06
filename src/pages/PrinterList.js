import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPrinterList } from '../actions/printers';
import {printerList, isPrinterListLoading} from '../selectors';

const PrinterList = () => {
  const dispath = useDispatch();
  const printers = useSelector(state => printerList(state));
  console.log('printers', printers);
  useEffect(() => {
    if(!printers) {
      dispath(getPrinterList());
    }
  });
  return (
    <section className="section-list">
      results
    </section>
  )
}

export default PrinterList
