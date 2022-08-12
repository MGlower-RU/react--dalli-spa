import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import './styles/index.scss';
import App from './App';
import ContextComponent from './components/MainContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent>
      <App />
    </ContextComponent>
  </React.StrictMode>
);