// /* eslint-env browser */
// import './assets/css/style.css';

// const title = document.createElement('h1');
// title.textContent = 'Hello Poi!';
// title.className = 'title';

// const tip = document.createElement('div');
// tip.textContent = 'Edit src/index.js and save to reload.';
// tip.className = 'tip';

// const app = document.getElementById('app');

// if (app) {
//   app.appendChild(title);
//   app.appendChild(tip);
// }

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'))