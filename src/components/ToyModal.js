
import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';





class ToyModal extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            toyName: (this.props.toy.id) ? this.props.toy.name : '',
            toyCategory: (this.props.toy.id) ? this.props.toy.category: '',
            toyDesc: (this.props.toy.id) ? this.props.toy.sesc : '',
            toyImg: (this.props.toy.id) ? this.props.toy.img : '',
            toyPrice: (this.props.toy.id) ? this.props.toy.price : 0,
            toyId: this.props.toy.id ? this.props.toy.id: null, 
            isModalActive: false,
        }
    }


    render() {

        return(

        <Modal style={{ textAlign: "right" }} show={this.props.isModalActive} onHide={() => { }}>
            <Modal.Header closeButton onClick={this.props.closeModal}>
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
                    <Form.Control required size="sm" as="select"
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

            {(this.props.toy.id) ?
                  <div>
                     <Form.Check type="checkbox" label="סימון כנמכר" />
                     <Button size="sm" variant="outline-dark">מחיקת פריט</Button>
                     <Button size="sm" variant="outline-dark" onClick={()=> this.props.handleEditToy(this.state)}> עדכון </Button>

                  </div>
           : <Button variant="outline-dark" onClick={this.props.handleNewToy}> שמירה </Button>
           
           }

            </Modal.Footer>
        </Modal>

        )}

}

export default ToyModal;