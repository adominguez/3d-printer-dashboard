import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPrinterList } from '../actions/printers';
import { printerList, printerListStatus } from '../selectors';

const PrinterList = () => {
  const dispath = useDispatch();
  const printers = useSelector(state => printerList(state));
  const status = useSelector(state => printerListStatus(state));

  console.log(status)
  console.log(printers)

  const onShowNewPrinterForm = () => {

  }

  useEffect(() => {
    if (!printers) {
      console.log('pasando')
      dispath(getPrinterList());
    }
  });
  return (
    <section className="section-list">
      <div className="toolbar">
        <button className="green" onClick={() => onShowNewPrinterForm()}>
          <i className={`icon fa fa-plus margin-right-4`}></i>
          <span>Añadir nueva impresora</span>
        </button>
      </div>
      {
        status === 'ERROR' &&
        <div className="error-message">
          <span>
            <i className={`icon fa fa-exclamation margin-right-12`}></i>
            Ha habido un error al recibir los datos, recarga de nuevo la página para mostrar los datos.
              </span>
        </div>
      }
      {
        status === 'COMPLETED' &&
        <div className={`printer-list ${status.toLowerCase()}`}>
          {
            printers.map((p, i) => (
              <article key={`${i}-printer-${p.key}`}>
                <img src={p.printerImage} alt={p.printerName} />
                <div className="text">
                  <h3>{p.printerName}</h3>
                  <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                  <button>Here's why</button>
                </div>
              </article>
            ))
          }
        </div>
      }
    </section>
  )
}

export default PrinterList
