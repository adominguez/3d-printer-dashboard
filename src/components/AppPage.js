import React from 'react';
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from "react-router-dom";
import {menuItems} from '../selectors';

const AppPage = ({ children }) => {
  const location = useLocation();
  const history = useHistory()
  const items = useSelector(state => menuItems(state));

  const getSelectedPage = () => {
    return items.find(item => item.route.includes(location.pathname)) || items.find(item => item.name === '404');
  }

  const navigateBack = () => {
    const route = location.pathname.split("/").slice(1, -1);
    const url = route.toString();
    history.push(`/${url.replace(',', '/')}`);
  }

  return (
    <main className="main">
      <div className="breadcrumb">
        {
          getSelectedPage().backButton &&
          <button onClick={navigateBack} className="breadcrumb-back margin-right-4"><i className={`fa fa-arrow-left`}></i></button>
        }
        <i className={`icon fa fa-${getSelectedPage().icon}`} />
        <h2>{getSelectedPage().name}</h2>
      </div>
      {children}
    </main>
  );
}

export default AppPage;
