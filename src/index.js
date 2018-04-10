// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root');

if (container instanceof Element) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    container
  );
} else {
  throw new Error("No element with id 'root' found in index.html file");
}
