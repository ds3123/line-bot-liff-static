import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';

// LINE LIFF
import { LiffProvider } from 'react-liff';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// LineBot LIFF id
const liffId = process.env.REACT_APP_LINE_LIFF_ID;

root.render(
            <React.StrictMode>

              <LiffProvider liffId = { liffId as any } >

                    <App />

              </LiffProvider>
              
            </React.StrictMode>
          ) ;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
