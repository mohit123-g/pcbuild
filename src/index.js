import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Songs from './Songs';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
// import index1 from '';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
   {/* <App/> */}
   <Login/>
   {/* <Event/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
