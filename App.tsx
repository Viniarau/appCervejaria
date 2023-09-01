import React from 'react';
import Router from './src/routes/router';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
