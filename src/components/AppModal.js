import React from 'react';

function AppModal({ cancelText = 'Cancel', acceptText = 'Accept', modalTitle = 'Modal Title', modalWidth = '80%', disabledAcceptButton, hideCancelButton, children, onHideModal, onAcceptModal }) {
  return (
    <div className="modal">
      <div className="modal-content" style={{width: modalWidth}}>
        <div className="modal-header">
          <h2>{modalTitle}</h2>
          <button className="close" onClick={() => onHideModal()}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          {
            !hideCancelButton &&
            <button className="cancel" onClick={()=> onHideModal()}>{cancelText}</button>
          }
          <button className="accept" onClick={()=> onAcceptModal()} disabled={disabledAcceptButton}>{acceptText}</button>
        </div>
      </div>
    </div>
  );
}

export default AppModal;
