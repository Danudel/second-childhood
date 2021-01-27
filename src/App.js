import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import ToysPage from './pages/ToysPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import SearchByLocationPage from './pages/SearchByLocationPage';
import AppNavBar from './components/AppNavBar';
import ToyDetails from './components/ToyDetails';

import toysJSON from './data/toys.json';
import usersJSON from './data/users.json';





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
      },
      allToys: toysJSON
    }
  }

  addToy = (newToy) => {
    this.setState({ allToys: this.state.allToys.concat(newToy) });
    localStorage.setItem('localToys', JSON.stringify(
      this.state.allToys.concat(newToy)
    ))
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
      <Route exact path={['/', '/toys', '/dashboard', '/location', '/signup', "/toys/:id"]}>
        <AppNavBar handleLogout={this.handleLogout} activeUser={this.state.activeUser}/>
      </Route>

      <Container>
        <Switch>

          <Route exact path="/toys">
            <ToysPage allToys={this.state.allToys}/>
          </Route>

          <Route exact path="/login">
            <LoginPage allUsers={usersJSON} handleLogin={this.handleLogin} />
          </Route>

          <Route exact path="/signup">
            <SignupPage />
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage addToy={this.addToy} activeUser={this.state.activeUser} allToys={this.state.allToys}/>
          </Route>

          <Route exact path="/location">
            <SearchByLocationPage />
          </Route>

          <Route exact path="/toys/:id">
            <ToyDetails allUsers={usersJSON} toys= {this.state.allToys}/>
          </Route>

          <Route exact path="/">
            <HomePage allToys={this.state.allToys}/>
          </Route>

        </Switch>
       </Container>

    </HashRouter>
  );
}
}



export default App;
