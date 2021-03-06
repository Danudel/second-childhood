
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
            activeFilter: [],
            priceFilter: 400
        }

        this.onFilterChange= this.onFilterChange.bind(this);
        this.onPriceChange= this.onPriceChange.bind(this);
    }
    
    navigateToToy = (event) => {
        this.setState({
            redirectIndex: event.currentTarget.getAttribute('data-index')
        })
    }

    onPriceChange(event){
        this.setState({priceFilter: event.target.value});
    }


    onFilterChange(event) {
        const { activeFilter } = this.state;
        const value = parseInt(event.target.value)
        if (activeFilter.includes(value)){
            this.setState({ activeFilter: activeFilter.filter((item)=> {
                return (item != value)
            }) 
        })
       
        }

        else {
            this.setState({
                activeFilter: [...activeFilter, value]
                                    
            })
        }
    }


    render() {
        const toyContent= [];
        for (let i=0; i<this.props.allToys.length; i++){
            console.log(this.state.activeFilter)
            if (this.state.activeFilter.length==0 || this.state.activeFilter.includes(this.props.allToys[i].category)){
                if(this.state.priceFilter > this.props.allToys[i].price){
                const toysCard =
                    <Col sm={12} md={4} style={{ padding: '25px' }}>
                        <Card className="card" >
                            <Card.Img className="toyImg" variant="top" src={this.props.allToys[i].img} />
                            {(this.props.allToys[i].sold === true) ? 
                                <Card.Img className="soldImg" src="https://www.pngonly.com/wp-content/uploads/2017/05/Sold-Out-Clipart-PNG-Image-03.png" />
                                : <div></div>}
                            
                            <Card.Body>
                                <Card.Title>{this.props.allToys[i].name}</Card.Title>
                                <Card.Text>  מחיר: {this.props.allToys[i].price} ש"ח</Card.Text>
                                {(this.props.allToys[i].sold===true) ? 
                                    <Button disabled className="align-self-center" variant="outline-dark" >נמכר</Button> 
                                    : <Button variant="outline-dark" data-index={i} onClick={this.navigateToToy} >לפרטים נוספים</Button>}
                                
                            </Card.Body>
                        </Card>
                    </Col>
                toyContent.push(toysCard);
            }
         }
                 
                
            

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
                            <Form.Check name="filter" value="1" onChange={this.onFilterChange} inline label=" צעצועי התפתחות " />
                            <Form.Check name="filter" value="2" onChange={this.onFilterChange} inline label=" צעצועי הרכבה " />
                            <Form.Check name="filter" value="3" onChange={this.onFilterChange} inline label=" כלי נגינה  " />
                            <Form.Check name="filter" value="4" onChange={this.onFilterChange} inline label=" יצירה  " />
                            <Form.Check name="filter" value="5" onChange={this.onFilterChange} inline label=" משחקי דמיון  " />
                            <Form.Check name="filter" value="6" onChange={this.onFilterChange} inline label=" משחקי קופסא  " />                 
                    </Form.Group>
                    
                    <Form.Group>
                            <Form.Label>מחיר עד: {this.state.priceFilter} </Form.Label>
                            <Form.Control size="sm" onChange={this.onPriceChange} value={this.state.priceFilter} type="range" min="10" max="400" step="10" />
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