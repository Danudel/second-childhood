import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import ToysPage from './pages/HomePage';
import LoginPage from './pages/HomePage';
import SignupPage from './pages/HomePage';
import DashboardPage from './pages/HomePage';
import SearchByLocationPage from './pages/HomePage';
import AppNavBar from './components/AppNavBar';




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      //  activeUser: null,
      activeUser: {
        "id": 1,
        "fname": "דנה",
        "lname": "נודל",
        "email": "danamula@gmail.com",
        "pwd": "123"
      }
    }
  }


  handleLogin = (userObj) => {
    this.setState({ activeUser: userObj })
  }
  handleLogout = () => {
    this.setState({ activeUser: null })
  }

  render() {
  return (
    <HashRouter>
      {/* <Route exact path={['/', '/toys', '/dashboard', '/location', '/signup']}>
        <AppNavBar handleLogout={this.handleLogout} activeUser="this.state.activeUser"/>
      </Route> */}

      {/* <Container>
        <Switch> */}

          <Route exact path="/toys">
            <ToysPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/signup">
            <SignupPage />
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>

          <Route exact path="/location">
            <SearchByLocationPage />
          </Route>
{/* 
          <Route exact path="/">
            <HomePage />
          </Route> */}
{/* 
        </Switch>
       </Container> */}

    </HashRouter>
  );
}
}



export default App;
