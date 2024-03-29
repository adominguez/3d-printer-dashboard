import React from 'react';

const PrinterList = ({ printersList = [], onShowNewPrinterForm, state = 'LOADING' }) => {

  const loadingMap=[{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <section className="section-list">
      <div className="toolbar">
        <button className="green" onClick={() => onShowNewPrinterForm()}>
          <i className={`icon fa fa-plus margin-right-4`}></i>
          <span>Añadir nueva impresora</span>
          </button>
          </div>
          {
            state === 'FAILED' &&
            <div className="error-message">
              <span>
                <i className={`icon fa fa-exclamation margin-right-12`}></i>
                Ha habido un error al recibir los datos, recarga de nuevo la página para mostrar los datos.
              </span>
            </div>
      }
      {
        state === 'DONE' &&
        <div className={`printer-list ${state.toLowerCase()}`}>
          {
            printersList.map((p, i) => (
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
      {
        state === 'LOADING' &&
        <div className={`printer-list ${state.toLowerCase()}`}>
          {
            loadingMap && loadingMap.map((item, i) => (
              <article key={`${i}-animation-loading-card`}>
                <div className="loading-animation"></div>
                <div className="image-loading" />
                <div className="texting" />
                <div className="texting" />
                <div className="action">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
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
