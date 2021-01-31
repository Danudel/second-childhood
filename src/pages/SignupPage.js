import React from 'react';
import './SignupPage.css';

import { Form, Col, Button } from 'react-bootstrap';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFname: (this.props.activeUser) ? this.props.activeUser.fname : '',
            userLname: (this.props.activeUser) ? this.props.activeUser.lname : '',
            userPass: (this.props.activeUser) ? this.props.activeUser.pwd : '',
            userEmail: (this.props.activeUser) ? this.props.activeUser.email : '',
            userAdress: (this.props.activeUser) ? this.props.activeUser.adress : '',
            userPhone: (this.props.activeUser) ? this.props.activeUser.phone : '',
        }
    }


    handleNewUser = () => {
        const newUser = {
            id: this.props.allUsers.length+1,
            fname: this.state.userFname,
            lname: this.state.userLname,
            pwd: this.state.userPass,
            email: this.state.userEmail,
            adress: this.state.userAdress,
            phone: this.state.userPhone
            
        }
        this.props.addUser(newUser);
        this.props.handleLogin(newUser);
        window.location.href = '/#/dashboard'
    }



    handleUpdatedUser = (user) => {
        const updatedUser = {
            id: this.props.activeUser.id,
            fname: user.userFname,
            lname: user.userLname,
            pwd: user.userPass,
            email: user.userEmail,
            adress: user.userAdress,
            phone: user.userPhone

        }
        this.props.updateUser(updatedUser);
        window.location.href = '/#/dashboard'
    }



    render() {
        return (
            <div>
                {/* if there is not an active user: use this page as a signup page 
                if there is an active user: use this page as an update details page*/}
                
                { (this.props.activeUser) ? <h5 className="mainHeadline"> עדכון פרטי משתמש </h5>
                : <div><h5 className="mainHeadline">
                    הרשמה בכמה צעדים פשוטים
                </h5>
                <h5 className="mainHeadline">
                 על מנת לקבל גישה למכירת פריטים, כולל אזור אישי עם מידע אודות פריטים שנמכרו ומוצעים למכירה.
                </h5></div>}


                <Form>
                <Form.Group>
                    <h5 className="signupSubHeadline">פרטים אישיים:</h5>
                    
                    <Form.Row>
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Group as={Col} controlId="formFname">
                                <Form.Control value={this.state.userFname} onChange={(event) => { this.setState({ userFname: event.target.value }) }}  placeholder="קיפי" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLname">
                                <Form.Control value={this.state.userLname} onChange={(event) => { this.setState({ userLname: event.target.value }) }} placeholder="בן קיפוד" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label> אי-מייל </Form.Label>
                        <Form.Group as={Col} controlId="formEmail">
                                <Form.Control value={this.state.userEmail} onChange={(event) => { this.setState({ userEmail: event.target.value }) }} type="email"  placeholder="kipi@benkipod.com" />
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>
                        <Form.Label>סיסמא</Form.Label>
                        <Form.Group as={Col} controlId="formPass">
                                <Form.Control value={this.state.userPass}  onChange={(event) => { this.setState({ userPass: event.target.value }) }} type="password" placeholder="הכנס/י סיסמא" />
                        </Form.Group>

                        {/* <Form.Group as={Col} controlId="formPass2">
                            <Form.Control type="password" placeholder="הכנס/י סיסמא שוב" />
                        </Form.Group> */}
                    </Form.Row>
                </Form.Group>


                <Form.Group>
                    <h5 className="signupSubHeadline">פרטי התקשרות:</h5>
                    <Form.Row>
                        <Form.Label>כתובת</Form.Label>
                        <Form.Group as={Col} controlId="formAdress">
                                <Form.Control value={this.state.userAdress} onChange={(event) => { this.setState({ userAdress: event.target.value }) }} placeholder="רחוב סומסום 123, תל-אביב, ישראל" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>טלפון</Form.Label>
                        <Form.Group as={Col} controlId="formPhone">
                                <Form.Control value={this.state.userPhone} onChange={(event) => { this.setState({ userPhone: event.target.value }) }} placeholder="050-1234567" />
                        </Form.Group>
                    </Form.Row>
                </Form.Group>

                    <div style={{ textAlign: "center" }}> 
                        {(this.props.activeUser) ? 
                            <Button variant="outline-dark" onClick={() => this.handleUpdatedUser(this.state)}> עדכון פרטים</Button>
                            : <Button variant="outline-dark" onClick={this.handleNewUser}> הרשמה</Button> 
                        } 
                    </div>
                </Form>


            </div>
        )
    }
}
export default SignupPage;