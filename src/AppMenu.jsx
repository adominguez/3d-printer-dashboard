import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function AppMenu({menuList, expandMenu, selectItem, menuSelected}) {
  return (
    <nav className={expandMenu ? 'expand-menu' : ''}>
      {
        menuList && menuList.length &&
        <ul>
          {
            menuList.map((item, i) =>
              <li key={i}>
                <Link to={item.route} className={item.name === menuSelected ? 'selected' : ''} onClick={() => selectItem(item)}>
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
