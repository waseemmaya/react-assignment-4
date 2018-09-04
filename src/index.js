import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import DefaultBulb from "./Bulbs/DefaultBulb";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DefaultBulb />, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
    module.hot.accept();
  }