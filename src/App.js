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
        "email": "danudel@gmail.com",
        "phone": "054-4449487",
        "adress": "ירמיהו 11,תל אביב",
        "pwd": "123"
      },
      allToys: toysJSON,
      allUsers: usersJSON
    }
  }

  addToy = (newToy) => {
    this.setState({ allToys: this.state.allToys.concat(newToy) });
    localStorage.setItem('localToys', JSON.stringify(
      this.state.allToys.concat(newToy)
    ))
  } 

  
  editToy = (updatedToy) =>{
      const updatedToysList = this.state.allToys.map((toy) => {
           if (toy.id != updatedToy.id) { 
             return toy; } 
     
           else {
              return updatedToy; }
       }) 

    this.setState({ allToys: updatedToysList })
       console.log(this.state.allToys);
  }


 deleteToy =(ToyId) =>{
    const updatedToysList = this.state.allToys.filter((toy, index) => toy.id !== ToyId);
        this.setState({ allToys: updatedToysList });
   }


  addUser = (newUser) => {
    this.setState({ allUsers: this.state.allUsers.concat(newUser) });
    this.setState({ activeUser: newUser });

    localStorage.setItem('localUsers', JSON.stringify(
      this.state.allUsers.concat(newUser)
    ))
  } 

  updateUser = (updatedUser) => {
    debugger;
    const updatedUsersList = this.state.allUsers.map((user) => {
      if (user.id != updatedUser.id) {
        return user;
      }

      else {
        return updatedUser;
      }
    })

    this.setState({ allUsers: updatedUsersList });
    this.setState({activeUser: updatedUser});
    console.log(this.state.allUsers);
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
      <Route exact path={['/', '/toys', '/dashboard', '/location', '/signup', '/dashboard/new', "/toys/:id"]}>
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
            <SignupPage updateUser={this.updateUser} activeUser={this.state.activeUser} handleLogin={this.handleLogin} allUsers={usersJSON} addUser={this.addUser}/>
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage deleteToy={this.deleteToy} addToy={this.addToy} editToy={this.editToy} activeUser={this.state.activeUser} allToys={this.state.allToys}/>
          </Route>

          <Route exact path="/dashboard/new">
            <DashboardPage newItem={true} deleteToy={this.deleteToy} addToy={this.addToy} editToy={this.editToy} activeUser={this.state.activeUser} allToys={this.state.allToys} />
          </Route>

          <Route exact path="/location">
            <SearchByLocationPage allToys={this.state.allToys} />
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
