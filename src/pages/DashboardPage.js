import React from 'react';
import './DashboardPage.css';


import { Button, Row, Jumbotron, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import {  Card, Col } from 'react-bootstrap';
import ToyModal from '../components/ToyModal';




class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toyName: '',
            toyCategory: '',
            toyDesc: '',
            toyImg: '',
            toyPrice: 0,
            toySold: false,
            isModalActive: false,
            editingToy: undefined
        }
    }


    openModal = (toyObj) => {
        this.setState({ isModalActive: true, editingToy: toyObj });
    }

    closeModal = () => {
        this.setState({ isModalActive: false });
    }

    handleNewToy = () => {
        const newToy = {
            name: this.state.toyName,
            category: this.state.toyCategory,
            img: this.state.toyImg,
            sesc: this.state.toyDesc,
            price: this.state.toyPrice,
            userId: this.props.activeUser.id,
            sold: false,
            id: this.props.allToys.length + 1
        }
        this.closeModal();
        this.props.addToy(newToy);   
    }

    handleEditToy =(toy)=>{
        const editedToy ={
            name: toy.toyName,
            category: toy.toyCategory,
            img: toy.toyImg,
            sesc: toy.toyDesc,
            price: toy.toyPrice,
            sold: toy.toySold,
            userId: this.props.activeUser.id,
            id: toy.toyId
    }
        this.closeModal();
        this.props.editToy(editedToy);  
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
                            {(toy.sold===true) ? 
                            <Card.Img className="soldImg" src="https://www.pngonly.com/wp-content/uploads/2017/05/Sold-Out-Clipart-PNG-Image-03.png" /> 
                            : <div></div>}
                        <Card.Text>מחיר: {toy.price} ש"ח</Card.Text>
                        {(toy.sold === true) ? 
                            <Button disabled className="align-self-center" variant="outline-dark" >עריכה</Button> 
                        :  <Button onClick={() => this.openModal(toy)} className="align-self-center" variant="outline-dark" >עריכה</Button> }
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

                {(this.state.isModalActive )? 
                     <ToyModal handleEditToy={this.handleEditToy} handleNewToy={this.handleNewToy} closeModal={this.closeModal} toy={this.state.editingToy} isModalActive={this.state.isModalActive} /> 
                     : null}

            </div>
        )
    }
}



export default DashboardPage;