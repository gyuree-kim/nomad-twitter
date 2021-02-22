import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from "./fbase";
console.log("hi");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

