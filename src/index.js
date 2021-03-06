import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/loginpage';
import Registerpage from './components/register/registerpage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <div>
          <Route exact path="/" component={Login} />
          <Route path="/sign-up" component={Registerpage} />
      </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
