import React from 'react';
import './App.css';
import Signup from './Signup';
import Providers from '../contexts/Providers';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Fichas from '../pages/Fichas';
import Ficha from '../pages/Ficha';
import FichaRoute from './FichaRoute';
import OffRoute from './OffRoute';
import NoAuthRoute from './NoAuthRoute';
import AuthRoute from './AuthRoute';
import FichasRoute from './FichasRoute';
import AuthProvider from '../contexts/AuthContext';
import FichaProvider from '../contexts/FichaContext';
import AuthProviders from '../providers/AuthProviders';
import FichaProviders from '../providers/FichaProviders';

function App() {
  return (
    <div style={{ minWidth: "100%", minHeight: "100vh", backgroundColor: "#111111", overflowX: 'auto' }}>
      <Router>
          {/* <Switch>
            <FichasRoute exact path="/" component={Fichas}/>
            <FichaRoute path="/ficha" component={Ficha} />
            <AuthRoute path="/profile" component={Dashboard}/>
            <AuthRoute path="/update-profile" component={UpdateProfile}/>
            <NoAuthRoute path="/login" component={Login} />
            <NoAuthRoute path="/signup" component={Signup} />
            <NoAuthRoute path="/forgot-password" component={ForgotPassword} />
            <Redirect from='*' to='/'/>
            <PrivateRoute exact path="/" component={Fichas}/>
            <PrivateRoute path="/profile" component={Dashboard}/>
            <PrivateRoute path="/update-profile" component={UpdateProfile}/>
            <FichaRoute path="/ficha" component={Ficha} />
            <OffRoute path="/signup" component={Signup}/>
            <OffRoute path="/login" component={Login}/>
            <OffRoute path="/forgot-password" component={ForgotPassword}/>
            <Redirect from='*' to='/' />
          </Switch> */}
          <AuthProviders>
            <Switch>
              <OffRoute path="/signup" component={Signup}/>
              <OffRoute path="/login" component={Login}/>
              <OffRoute path="/forgot-password" component={ForgotPassword}/>
              <PrivateRoute path="/profile" component={Dashboard}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}/>
            </Switch>
            <FichaProviders>
              <Switch>
                <PrivateRoute exact path="/" component={Fichas} />
                <FichaRoute path="/ficha" component={Ficha} />
              </Switch>
            </FichaProviders>
          </AuthProviders>
      </Router>
    </div>
  )
}

export default App;
