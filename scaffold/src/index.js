import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './组件间的通信/01_组件间的嵌套';
import App from './组件间的通信/04_父传子通信_属性验证';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
