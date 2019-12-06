import React from 'react';
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import {menuItems} from '../selectors';

const AppPage = ({ children }) => {
  const location = useLocation();
  const items = useSelector(state => menuItems(state));

  const getSelectedPage = () => {
    return items.find(item => item.route.includes(location.pathname)) || items.find(item => item.name === '404');
  }

  return (
    <main className="main">
      <div className="breadcrumb">
        <i className={`icon fa fa-${getSelectedPage().icon}`} />
        <h2>{getSelectedPage().name}</h2>
      </div>
      {children}
    </main>
  );
}

export default AppPage;
