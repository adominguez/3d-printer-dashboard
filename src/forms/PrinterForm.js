import React, { useState, useEffect } from 'react';
import AppInputTextField from '../components/AppInputTextField'

function PrinterForm(props) {

  const { formSubmit, type, onSubmitPrinter, printerName, printerAsin, printerImage, postLink, amazonLink, gearbestLink, printerDimensions, printerVolume, printerResolution, printerSpeed } = props;

  useEffect(() => {
    if(formSubmit && type === 'NEW_PRINTER') {
      onSubmitPrinter();
    }
  });

  const onChangeInput = (value) => {
    console.log('hola', value);
  }

  return (
    <form>
      <AppInputTextField
        required
        value="50"
        disabled
        requiredText="Este campo es requerido, por favor completalo para continuar"
        placeholder="Impresora Creality Ender 3"
        labelText="Nombre de la impresora"
        helperText="Inserta el nombre de la impresora 3D"
        onChange={onChangeInput}
      />
      <AppInputTextField
        type="email"
        required
        requiredText="Este campo es requerido, por favor completalo para continuar"
        errorText="Rellena este campo con un email válido"
        labelText="Código ASIN de Amazon"
        helperText="Todos los productos de Amazon tienen un código ASIN que se puede ver en la url del producto"
        onChange={onChangeInput}
      />
      <AppInputTextField
        type="text"
        labelText="Código ASIN de Amazon"
        helperText="Todos los productos de Amazon tienen un código ASIN que se puede ver en la url del producto"
        onChange={onChangeInput}
      />
      <label className="has-float-label">
        <input type="text" name="printerAsin" required placeholder="B078GMM4T6" autoComplete="off" value={printerAsin || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Código ASIN *</span>
        <span className="helper">Todos los productos de Amazon tienen un código ASIN que se puede ver en la url del producto</span>
			  <span className="error">Error: Please enter a valid email</span>
      </label>
      <div className="row-container-field">
        <label className="has-float-label">
          <input type="url" name="printerImage" required placeholder="https://3dmakernow.com/wp-content/uploads/2018/06/610oWCT427L._SY450_.jpg" autoComplete="off" value={printerImage || ''} onChange={(e) => onChangeInput(e)} />
          <span className="label">Url de la imagen *</span>
          <span className="helper">Inserta el enlace de la imagen del producto</span>
          <span className="error">Error: Inserta un enlace correcto</span>
        </label>
        <div className="image-url" style={{backgroundImage: `url(${printerImage})`}} />
      </div>
      <label className="has-float-label">
        <input type="url" name="postLink" required placeholder="https://3dmakernow.com/creality-ender-2-desktop-opiniones/" autoComplete="off" value={postLink || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Url del post en el blog *</span>
        <span className="helper">Inserta el enlace del post en el blog</span>
        <span className="error">Error: Inserta un enlace correcto</span>
      </label>
      <label className="has-float-label">
        <input type="url" name="amazonLink" required placeholder="https://amzn.to/2YYqKYV" autoComplete="off" value={amazonLink || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Url de Amazon *</span>
        <span className="helper">Inserta el enlace de afiliado de Amazon del producto</span>
			  <span className="error">Error: Inserta un enlace correcto</span>
      </label>
      <label className="has-float-label">
        <input type="url" name="gearbestLink" required placeholder="https://www.gearbest.com/3d-printers-3d-printer-kits/pp_640022.html?lkid=15117381" autoComplete="off" value={gearbestLink || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Url de Gearbest *</span>
        <span className="helper">Inserta el enlace de afiliado de Gearbest del producto</span>
			  <span className="error">Error: Inserta un enlace correcto</span>
      </label>
      <label className="has-float-label">
        <input type="text" name="printerDimensions" required placeholder="330 x 330 x 540 mm" autoComplete="off" value={printerDimensions || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Dimensiones de la impresora *</span>
        <span className="helper">Inserta las dimesiones que tiene la impresora en mm</span>
      </label>
      <label className="has-float-label">
        <input type="text" name="printerVolume" required placeholder="220 x 220 x 240 mm" autoComplete="off" value={printerVolume || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Volumen de impresión *</span>
        <span className="helper">Inserta el volumen de impresión de la impresora en mm</span>
      </label>
      <label className="has-float-label">
        <input type="text" name="printerResolution" required placeholder="0,1-0,3mm" autoComplete="off" value={printerResolution || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Resolución de impresión *</span>
        <span className="helper">Inserta la Resolución de impresión de la impresora en mm</span>
      </label>
      <label className="has-float-label">
        <input type="text" name="printerSpeed" required placeholder="30-80mm/s" autoComplete="off" value={printerSpeed || ''} onChange={(e) => onChangeInput(e)} />
        <span className="label">Velocidad de impresión *</span>
        <span className="helper">Inserta la Velocidad de impresión de la impresora</span>
      </label>
    </form>
  );
}

export default PrinterForm;
