import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PrinterList from './PrinterList';
import AppMenu from './AppMenu';
import AppPage from './AppPage';
import AppModal from './AppModal';
import Dashboard from './Dashboard';
import AppHeader from './AppHeader';
import PrinterForm from './forms/PrinterForm';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GET_PRINTERS } from './services';
import { createBrowserHistory } from 'history';
import { MENU_ITEMS } from './consts'
const history = createBrowserHistory();

const Application = ({ ApplicationTitle, printers, printerListState, menu, modal, selectItemMenu, showNewPrinterForm, hideModal, acceptModal, changeInputPrinterForm, newPrinter, submitPrinter, getPrinterList, menuSelected }) => {
  const { acceptedModal, options: { modalTitle, cancelText, acceptText, hideCancelButton, modalWidth, disabledAcceptButton } } = modal;

  useEffect(() => {
    getPrinterList();
  }, []);
  return (
    <div>
      <AppHeader applicationTitle={ApplicationTitle} />
      <Router>
        <AppMenu menuList={menu} selectItem={selectItemMenu} miniWidth={60} normalWidth={180} menuSelected={menuSelected} />
        <AppPage pageSelected={menu.find(i => i.name === menuSelected) || []}>
          <Switch>
            <Route
              exact
              path={MENU_ITEMS[0].route}
              component={Dashboard} />
            <Route
              path={MENU_ITEMS[1].route}
              render={props => <PrinterList {...props} printersList={printers} onShowNewPrinterForm={showNewPrinterForm} state={printerListState} />}
            />
            <Route
              path={MENU_ITEMS[1].detail.route}
              render={props => <div>Printer Detail</div>}
            />
            <Route
              path={MENU_ITEMS[2].route}
              render={props => <PrinterList {...props} printersList={printers} onShowNewPrinterForm={showNewPrinterForm} state={printerListState} />}
            />
            <Route
              render={props => <div>404</div>}
            />
          </Switch>
        </AppPage>
      </Router>
      {
        modal.visible &&
        <AppModal modalTitle={modalTitle} cancelText={cancelText} acceptText={acceptText} modalWidth={modalWidth} hideCancelButton={hideCancelButton} disabledAcceptButton={disabledAcceptButton} onHideModal={hideModal} onAcceptModal={acceptModal}>
          {
            modal.type === 'NEW_PRINTER' &&
            <PrinterForm type={modal.type} onChangeInput={changeInputPrinterForm} printer={newPrinter} formSubmit={acceptedModal} onSubmitPrinter={submitPrinter} />
          }
        </AppModal>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ApplicationTitle: state.ApplicationTitle,
    printers: state.printers,
    printerListState: state.printerListState,
    menu: state.menu,
    menuSelected: state.menuSelected,
    modal: state.modal,
    newPrinter: state.newPrinter,
    route: state.newPrinter,
  }
}

const mapDispatchToProps = dispatch => ({
  selectItemMenu(item) {
    history.push(item.route)
    dispatch({
      type: 'SELECT_ITEM_MENU',
      item
    })
  },
  showNewPrinterForm() {
    dispatch({
      type: 'SHOW_MODAL',
      modal: 'NEW_PRINTER'
    })
  },
  hideModal() {
    dispatch({
      type: 'HIDE_MODAL'
    })
  },
  acceptModal() {
    dispatch({
      type: 'ACCEPT_MODAL'
    })
  },
  submitPrinter() {
    dispatch({
      type: 'SUBMIT_PRINTER'
    })
  },
  changeInputPrinterForm(e) {
    dispatch({
      type: 'CHANGE_INPUT_PRINTER_FORM',
      item: {
        name: e.currentTarget.name,
        value: e.currentTarget.value
      }
    })
  },
  getPrinterList() {
    dispatch({
      type: 'GET_PRINTER_LIST',
    })
    const options = {
      method: 'GET',
      cache: 'default',
      json: true
    };
    const myRequest = new Request(GET_PRINTERS, options);

    fetch(myRequest)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        const printers = [];
        _.map(data, (printer, key) => {
          printers.push({
            ...printer,
            key
          });
        });
        dispatch({
          type: 'GET_PRINTER_LIST_DONE',
          printers
        })
      })
      .catch(() => {
        dispatch({
          type: 'GET_PRINTER_LIST_FAILED',
        })
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application)
