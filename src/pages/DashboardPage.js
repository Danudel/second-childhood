import React from 'react';
import './DashboardPage.css';


import { Button, Row, Jumbotron, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import {  Card, Col } from 'react-bootstrap';




class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toyName: '',
            toyCategory: '',
            toyDesc: '',
            toyImg: '',
            toyPrice: 0,
            isModalActive: false,
        }
    }


    openModal = () => {
        this.setState({ isModalActive: true });
    }

    closeModal = () => {
        this.setState({ isModalActive: false });
    }

    handleNewToy = () => {
        const newToy = {
            name: this.state.toyName,
            category: this.state.toyCategory,
            img: this.state.toyImg,
            desc: this.state.toyDesc,
            price: this.state.toyPrice,
            userId: this.props.activeUser.id,
            id: this.props.allToys.length + 1
        }
        this.closeModal();
        this.props.addToy(newToy);
        console.log(newToy);
    }

    render() {
        if (!this.props.activeUser) {
            return <Redirect push to="/login" />
        }

        const filteredToys = this.props.allToys.filter((recipe) => {   
            return this.props.activeUser.id === recipe.userId;
        })

       
       
        const userToys = filteredToys.map((toy) => {
            return (
                  <Col lg={4} md={6} sm={12}>
                    <Card className="cardStyle">
                            <Card.Title>{toy.name}</Card.Title>
                            <Card.Img className="toyImg" variant="top" src={toy.img} alt={toy.name} />
                        <Card.Text>מחיר: {toy.price} ש"ח</Card.Text>
                        <Button className="align-self-center" variant="outline-dark" >עריכה</Button>
                </Card>
            </Col>
            );
        })



        return (
            <div className="c-recipes-page">
                <Jumbotron className="text-center">
                    <h1 className="text-center">צעצועים שהעלתי למכירה:</h1>
                    <Button variant="outline-dark"  className="ml-auto" onClick={this.openModal}> הוספת צעצוע חדש</Button>
                </Jumbotron>
                <Row className="justify-content-between">
                    {userToys}
                </Row>

                <Modal show={this.state.isModalActive} onHide={() => { }}>
                    <Modal.Header closeButton onClick={this.closeModal}>
                        <Modal.Title>הוספת פריט חדש למכירה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Label>שם הצעצוע</Form.Label>
                            <Form.Control required type="text"
                                onChange={(event) => { this.setState({ toyName: event.target.value }) }}
                                placeholder="" value={this.state.toyName} />

                            <Form.Label>תיאור</Form.Label>
                            <Form.Control required type="text"
                                onChange={(event) => { this.setState({ toyDesc: event.target.value }) }}
                                placeholder="" value={this.state.toyDesc} />

                            <Form.Label>תמונה</Form.Label>
                            <Form.Control required type="text"
                                onChange={(event) => { this.setState({ toyImg: event.target.value }) }}
                                placeholder="" value={this.state.toyImg} />

                            <Form.Label>מחיר</Form.Label>
                            <Form.Control required type="number"
                                min="10" max="700" step="10"
                                onChange={(event) => { this.setState({ toyPrice: event.target.value }) }}
                                placeholder="" value={this.state.toyPrice} />

                            <Form.Label>קטגוריה</Form.Label>
                            <Form.Control required  size="sm" as="select"
                                onChange={(event) => { this.setState({ toyCategory: event.target.value }) }}
                                placeholder="" value={this.state.toyCategory}>
                                    
                                <option value="1">צעצועי התפתחות</option>
                                <option value="2">צעצועי הרכבה</option>
                                <option value="3">כלי נגינה</option>
                                <option value="4">יצירה </option>
                                <option value="2">משחקי דמיון </option>
                                <option value="2"> משחקי קופסא</option>
                            </Form.Control>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="outline-dark" onClick={this.handleNewToy}>
                            שמירה
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }
}



export default DashboardPage;