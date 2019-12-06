import React from 'react';

function AppHeader({applicationTitle}) {

  return (
    <header className="header">
      <h1>{applicationTitle}</h1>
      <div className="user-information">User information</div>
    </header>
  );
}

export default AppHeader;
