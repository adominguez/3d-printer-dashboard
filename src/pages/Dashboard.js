import React from 'react';

const Dashboard = ({ history }) => {
  const navigateToResults = (event) => {
    history.push(`printer-list`);
  }
  return (
    <div>
      <button onClick={navigateToResults}></button>
    </div>
  );
}

export default Dashboard;
