import React, { useEffect, useState } from 'react';
import AppMenu from './components/AppMenu';
import AppPage from './components/AppPage';
import AppModal from './components/AppModal';
import Dashboard from './pages/Dashboard';
import PrinterList from './pages/PrinterList';
import NewPrinter from './pages/NewPrinter';
import AppHeader from './components/AppHeader';
import PrinterForm from './forms/PrinterForm';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Application = ({ }) => {

  return (
    <div>
      <Router>
        <AppHeader applicationTitle={'3DMakerNow dashboard'} />
        <AppMenu miniWidth={60} normalWidth={180}/>
        <AppPage>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/printers" component={PrinterList} />
          <Route path="/printers/create-new-printer" component={NewPrinter} />
        </AppPage>
      </Router>
    </div>
  );
}

export default Application;
