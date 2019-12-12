import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AppMenu from './components/AppMenu';
import AppPage from './components/AppPage';
import AppModal from './components/AppModal';
import Dashboard from './pages/Dashboard';
import PrinterList from './pages/PrinterList';
import NewPrinter from './pages/NewPrinter';
import AppHeader from './components/AppHeader';
import PrinterForm from './forms/PrinterForm';
import CreatePrinterCategory from './forms/CreatePrinterCategory';
const Application = ({ }) => {
  const modal = useSelector(state => state.application.modal);

  return (
    <div>
      <Router>
        <AppHeader applicationTitle={'3DMakerNow dashboard'} />
        <AppMenu miniWidth={60} normalWidth={180}/>
        <AppPage>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/printers" component={PrinterList} />
          <Route path="/printers/create-new-printer" component={NewPrinter} />
          <Route path="/printers/create-new-printer-category" component={CreatePrinterCategory} />
        </AppPage>
      </Router>
      {
        modal.visible &&
        <AppModal>
          {
            modal.type === 'NEW_PRINTER' &&
            <PrinterForm type={modal.type} />
          }
        </AppModal>
      }
    </div>
  );
}

export default Application;
