import React from 'react';
import './ToyDetails.css';

import { Card, Col, Jumbotron, ListGroup, ListGroupItem, Row,  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const ToyDetails = function (props) {

    
    const { id } = useParams();
    const selectedToy = props.toys[id];
    
    const seller = props.allUsers.filter((user)=> {
      return  selectedToy.userId === user.id   
    } )


    return (
        <div>
            <h1 style={{ fontWeight: "bold" }}>{selectedToy.name}</h1>
            <Row>
                <Col xs={12} sm={12} md={9} lg={9} >
                <Card  className="mainCard">
                <Card.Img className="imgStyle" variant="top" src={selectedToy.img} />
                    <Card.Text>{selectedToy.sesc}</Card.Text>
                    <Card.Text>מחיר: {selectedToy.price} ש"ח</Card.Text>
                </Card>
               </Col>

                <Col sm={3}>
                    <Card className="detailsCard">
                    <ListGroupItem > שם המוכר/ת: {seller[0].fname} {seller[0].lname}</ListGroupItem>
                    <ListGroup  className="list-group-flush" >
                            <ListGroupItem className="detailsCard">נקודת איסוף: {seller[0].adress} </ListGroupItem>
                        <ListGroupItem>יצירת קשר: </ListGroupItem>
                            <ListGroupItem className="detailsCard"> {seller[0].phone} </ListGroupItem>
                            <ListGroupItem className="detailsCard"> {seller[0].email} </ListGroupItem>
                    </ListGroup>
            </Card>
            </Col>

            </Row>
        </div>
    )
}
export default ToyDetails;




