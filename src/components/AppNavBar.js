import React from 'react';

import './AppNavBar.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const AppNavBar = function(props) {
    const { activeUser, handleLogout } = props;
    const loginEl = (!activeUser) ? <Nav.Link href="/#/login">כניסה</Nav.Link> : null;
    const signupEl = (!activeUser) ? <Nav.Link href="/#/signup">הרשמה</Nav.Link> : null;
    const logoutEl = (activeUser) ? <Nav.Link onClick={handleLogout}>יציאה</Nav.Link> : null;

    return (
        
        <Navbar className="justify-content-right" bg="light" expand="lg">
            <Navbar.Brand className="logo" href="/">ילדותי השניה</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <Nav.Link  href="/#/toys">צעצועים</Nav.Link>
                <NavDropdown  title="איזור אישי" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#/signup">עריכת פרטים אישיים</NavDropdown.Item>
                        <NavDropdown.Item href="/#/dashboard">פריטים שהעלתי</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">העלאת פריט חדש</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
           
            <Nav style= {{paddingLeft: 5}} > {activeUser ? 'היי' : ''}</Nav>
            <Nav> {activeUser ?  activeUser.fname : ''}</Nav>
            <Nav className="ml-auto">
                {loginEl}
                {signupEl}
                {logoutEl}
            </Nav>

        </Navbar>

    )
}
export default AppNavBar;