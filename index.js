import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
function Col()
{
  let count =  parseInt(document.getElementById('counter').innerHTML);
  console.log(typeof(count));
  let body = document.getElementById('body');
  console.log(body);
  if(count == 20)
  {
    body.style.backgroundColor='black';
  }
  else if(count==10)
  {
    body.style.backgroundColor='yellow';
  }
  else if(count==5)
  {
    body.style.backgroundColor='white';
  }
  else
  {

  }
}
Col();
// 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
