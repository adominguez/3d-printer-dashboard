import React from 'react';

const AppStep = ({ children, stepName }) => {

  return (
    <div>
      <h4>{stepName}</h4>
      <div>
        {children}
      </div>
    </div>
  );
}

export default AppStep;
