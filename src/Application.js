import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PrinterList from './pages/PrinterList';
import AppMenu from './components/AppMenu';
import AppPage from './components/AppPage';
import AppModal from './components/AppModal';
import Dashboard from './pages/Dashboard';
import AppHeader from './components/AppHeader';
import PrinterForm from './forms/PrinterForm';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GET_PRINTERS } from './services';
import { MENU_ITEMS } from './consts'

const Application = ({}) => {

  return (
    <div>
      <AppHeader applicationTitle={'3DMakerNow dashboard'} />
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/printer-list" component={PrinterList} />
        </div>
      </Router>
    </div>
  );
}

export default Application;
