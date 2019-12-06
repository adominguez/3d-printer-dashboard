import React from 'react';

const Dashboard = ({ history }) => {
  const navigateToResults = (event) => {
    history.push(`printers`);
  }
  return (
    <div>
      <button onClick={navigateToResults}></button>
    </div>
  );
}

export default Dashboard;
