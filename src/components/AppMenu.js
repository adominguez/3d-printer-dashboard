import React from 'react';
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {menuItems} from '../selectors';

function AppMenu({expandMenu}) {
  const location = useLocation();
  const items = useSelector(state => menuItems(state));

  const route = location.pathname.split("/").slice(1);

  const getSelectedPage = () => {
    return items.find(item => item.route.includes(route[0])) || {};
  }
  return (
    <nav className={expandMenu ? 'expand-menu' : ''}>
      {
        items && items.length &&
        <ul>
          {
            items.map((item, i) =>
                !item.hide &&
                <li key={i}>
                  <Link to={item.route} className={item.name === getSelectedPage().name ? 'selected' : ''}>
                    <i className={`icon fa fa-${item.icon}`}></i>
                    <span>{item.name}</span>
                    <span></span>
                  </Link>
                </li>
            )
          }
        </ul>
      }
    </nav>
  );
}

export default AppMenu;
