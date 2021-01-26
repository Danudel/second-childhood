
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardDeck, Col, Form, Jumbotron } from 'react-bootstrap';
//import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
//   taken from:  https://jaywilz.github.io/react-bootstrap-range-slider/?spm=a2c6h.14275010.0.0.67d13d6eA4ZYZw
import './ToysPage.css';
import categoryJSON from '../data/toyCategory.json';



class ToysPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            redirectIndex: -1,
            allCategories: categoryJSON,
            activeFilter: []
        }
    }
    
    navigateToToy = (event) => {
        this.setState({
            redirectIndex: event.currentTarget.getAttribute('data-index')
        })
    }

    // onFilterChange(filter) {
    //     const { activeFilter } = this.state;
    //     const toysList = this.props.allToys;
        
    //     if (activeFilter.length === 6) { //there are 6 toys categories. if all of them are checked- delete the filter array
    //         this.setState({ activeFilter: [] });
    //     } else {
    //         this.setState({ activeFilter: toysList.map(filter => filter.value) });  
    //     }

        
    // }


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
                <Jumbotron style={{textAlign: "right"}}>
                    <p style={{ fontWeight: "bold"}}>סינון על פי:</p>
                  <Form> 

                    <Form.Group>
                        <Form.Check onClick={() => this.onFilterChange(1)} inline label=" צעצועי התפתחות " />
                        <Form.Check inline label=" צעצועי הרכבה " />
                        <Form.Check inline label=" כלי נגינה  " />
                        <Form.Check inline label=" יצירה  " />
                        <Form.Check inline label=" משחקי דמיון  " />
                        <Form.Check inline label=" משחקי קופסא  " />                 
                    </Form.Group>
                    
                    <Form.Group>
                            <Form.Label>מחיר עד:</Form.Label>
                            <Form.Control type="range" min="10" max="400" step="10" marks={true} />
                  </Form.Group>

                    </Form> 
                    <a href="/#/location">
                      <Button variant="outline-dark">חיפוש צעצועים על גבי מפה</Button>
                    </a>
                </Jumbotron>
                < CardDeck>
                    {toyContent}
                </CardDeck>

                
            </div>
            
        )
    }
}
export default ToysPage;