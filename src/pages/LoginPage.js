import React from 'react';
import './LoginPage.css';

import { Form, Button } from 'react-bootstrap';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // Controlled component steps
        // 1. Add key to state
        // 2. map to value
        // 3. update using onChange
        this.state = {
            email: '',
            pwd: ''
        }
        
    }
    validateLogin = () => {
        const users= this.props.allUsers;
        for (let i = 0; i < users.length; i++) {
            if ( users[i].email === this.state.email) {
                if (users[i].pwd === this.state.pwd){
                this.props.handleLogin(users[i]);
                window.location.href = '/#/dashboard'
                return;
                // We will login the user
                // return the found user
                }
                else{
                    alert('אי-מייל או סיסמא שגויים. נא לנסות שוב');
                    return;
                }
            }
          
        }
        alert('אי-מייל או סיסמא שגויים. נא לנסות שוב');
        return;
          // alert that the user does not exist

    }
    render() {
        // Steps to login
        // 1. if the user exists in the user.json?
        // 2. if the user password matches
        // 3. update the activeUser state in <App> (using handleLogin() prop)
        return (
            <div className="c-login-page">
                <h1>כניסה- ילדותי השנייה</h1>
                <Form>
                    <Form.Group className="loginText" controlId="formBasicEmail">
                        <Form.Label>כתובת אי-מייל</Form.Label>
                        <Form.Control type="email"
                            onChange={(event) => { this.setState({ email: event.target.value }) }}
                            placeholder="אי-מייל" value={this.state.email} />
                    </Form.Group>

                    <Form.Group className="loginText" controlId="formBasicPassword">
                        <Form.Label >סיסמא</Form.Label>
                        <Form.Control type="password"
                            onChange={(event) => { this.setState({ pwd: event.target.value }) }}
                            placeholder="סיסמא" value={this.state.pwd} />
                    </Form.Group>
                    <Button onClick={this.validateLogin} block variant="outline-dark" type="button">
                        כניסה
                </Button>
                </Form>
                <br />
                <a href="/#/signup">להצטרפות לחצו כאן</a>
            </div>
        )
    }
}
export default LoginPage;