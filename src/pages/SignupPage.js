import React from 'react';
import './SignupPage.css';

import { Form, Col, Button } from 'react-bootstrap';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFname: '',
            userLname: '',
            userPass: '',
            userEmail: '',
            userAdress: '',
            userPhone: ''
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

    render() {
        return (
            <div>
                <h5 className="mainHeadline">
                    הרשמה בכמה צעדים פשוטים
                </h5>
                <h5 className="mainHeadline">
                    על מנת לקבל גישה למכירת פריטים, כולל אזור אישי עם מידע אודות פריטים שנמכרו ומוצעים למכירה.
                </h5>

                <Form>
                <Form.Group>
                    <h5 className="signupSubHeadline">פרטים אישיים:</h5>
                    <Form.Row>
                        <Form.Label>שם מלא</Form.Label>
                        <Form.Group as={Col} controlId="formFname">
                            <Form.Control  placeholder="קיפי" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLname">
                            <Form.Control placeholder="בן קיפוד" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label> אי-מייל </Form.Label>
                        <Form.Group as={Col} controlId="formEmail">
                                <Form.Control type="email"  placeholder="kipi@benkipod.com" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label>סיסמא</Form.Label>
                        <Form.Group as={Col} controlId="formPass">
                            <Form.Control type="password" placeholder="הכנס/י סיסמא" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPass2">
                            <Form.Control type="password" placeholder="הכנס/י סיסמא שוב" />
                        </Form.Group>
                    </Form.Row>
                </Form.Group>


                <Form.Group>
                    <h5 className="signupSubHeadline">פרטי התקשרות:</h5>
                    <Form.Row>
                        <Form.Label>כתובת</Form.Label>
                        <Form.Group as={Col} controlId="formAdress">
                            <Form.Control placeholder="רחוב סומסום 123, תל-אביב, ישראל" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>טלפון</Form.Label>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Control placeholder="050-1234567" />
                        </Form.Group>
                    </Form.Row>
                </Form.Group>

                    <div style={{ textAlign: "center" }}> <Button variant="outline-dark" onClick={this.handleNewUser}> הרשמה</Button> </div>

                </Form>


            </div>
        )
    }
}
export default SignupPage;