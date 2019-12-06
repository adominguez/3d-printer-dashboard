import React from 'react';
import { Provider } from 'react-redux';
import Application from './Application';
import PropTypes from 'prop-types';


const App = ({store}) => {
  return (
    <Provider store={store}>
        <Application />
    </Provider>
  );
}

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
