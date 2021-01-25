
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardDeck, Col } from 'react-bootstrap';
import './ToysPage.css';



class ToysPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            redirectIndex: -1
        }
    }
    
    navigateToToy = (event) => {
        this.setState({
            redirectIndex: event.currentTarget.getAttribute('data-index')
        })
    }

    render() {
        const toyContent= [];
        for (let i=0; i<this.props.allToys.length; i++){
            const toysCard =
            <Col sm={12} md={4} style={{ padding: '25px' }}>
                    <Card className="card" >
                        <Card.Img className="toyImg" variant="top" src={this.props.allToys[i].img} />
                        <Card.Body>
                            <Card.Title>{this.props.allToys[i].name}</Card.Title>
                            <Card.Text>  מחיר: {this.props.allToys[i].price} ש"ח</Card.Text>
                            <Button variant="outline-dark" data-index={i} onClick={this.navigateToToy} >לפרטים נוספים</Button>
                        </Card.Body>
                    </Card>
            </Col>
            toyContent.push(toysCard);
        }

        if (this.state.redirectIndex > -1) {
            return (<Redirect push to={`/toys/${this.state.redirectIndex}`}></Redirect>);
        }

        return (
            <div>
                <h1 className="header"> צעצועים</h1>
                < CardDeck>
                    {toyContent}
                </CardDeck>

                
            </div>
            
        )
    }
}
export default ToysPage;