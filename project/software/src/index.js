import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './nav.css';
import './course.css';
import './login.css';
import './sign.css';
import './coursesShow.css';
import Home from './home.js';
import Courses from './Courses.js';
import Login from './login.js'
import Sign from './signup.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/Courses" Component={Courses}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/sign" Component={Sign}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
