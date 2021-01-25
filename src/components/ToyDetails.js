import React from 'react';
import './ToyDetails.css';

import { Card, Jumbotron, ListGroup, ListGroupItem, Row,  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const ToyDetails = function (props) {

    
    const { id } = useParams();
    const selectedToy = props.toys[id];
    
    const seller = props.allUsers.filter((user)=> {
      return  selectedToy.userId === user.id   
    } )


    return (
        <Row>
        <Card className="mainCard">
            <Card.Title style={{fontWeight: "bold"}}>{selectedToy.name}</Card.Title>
            <Card.Img className="imgStyle" variant="top" src={selectedToy.img} />
                <Card.Text>{selectedToy.sesc}</Card.Text>
                 <Card.Text>מחיר: {selectedToy.price} ש"ח</Card.Text>

        </Card>


        <Card>
                <ListGroupItem> שם המוכר/ת: {seller[0].fname} {seller[0].lname}</ListGroupItem>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>נקודות איסוף: {seller[0].adress} </ListGroupItem>
                    <ListGroupItem>יצירת קשר: </ListGroupItem>
                    <ListGroupItem> {seller[0].phone} </ListGroupItem>
                    <ListGroupItem> {seller[0].email} </ListGroupItem>
                </ListGroup>
        </Card>

        </Row>
    )
}
export default ToyDetails;




