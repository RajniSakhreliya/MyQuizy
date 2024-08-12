import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';

import Start from './js/start';
import Score from './js/Score';
import Submit from './js/Submit';
import Category from './js/Category';
import JoinQuiz from './js/Joinquiz';
import Sidebar from './js/sidebar';
import Login from './js/login';
import ContestRules from './js/SidebarPages/contestRules';
import AboutUs from './js/SidebarPages/AboutUs';
import ContactUs from './js/SidebarPages/ContactUs';
import PrivacyPolicy from './js/Privacy';
import Home from './js/home';

import { store } from './js/store';
import { Provider } from 'react-redux';
import App from './App';
import './css/index.css';
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from './js/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('main'));

const isUserReach = localStorage.getItem('isUserReach');
const isLocalStorageData = localStorage.getItem('categoryData');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);

reportWebVitals();