import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DataLayer } from './DataLayer';
import reducer, { initialState } from './Reducer';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(

<BrowserRouter>
<DataLayer initialState={initialState} reducer={reducer}>
<App />
</DataLayer>
</BrowserRouter>,
  document.getElementById('root'));

reportWebVitals();
