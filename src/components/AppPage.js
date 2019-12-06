import React from 'react';

function AppPage({pageSelected, children}) {

  return (
    <main className="main">
      <div className="breadcrumb">
        <i className={`icon fa fa-${pageSelected.icon}`} />
        <h2>{pageSelected.name}</h2>
      </div>
      {children}
    </main>
  );
}

export default AppPage;
