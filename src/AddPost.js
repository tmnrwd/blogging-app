import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: "",
            location: "",
            precis: "",
            date: 0,
            time: 0
        }
    }
//does the set time with date thing work??
    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        let date = new Date();
        newState.time = date;
        this.setState(newState)
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.name, this.state.location, this.state.precis, this.state.date, this.state.time);
        this.setState({
            id: 0,
            name: "",
            location: "",
            precis: "",
            date: 0,
            time: 0
        })
    }

    render() {
        return (
            <>
                <Form onSubmit={(e) => this.submitHandler(e)}>
                    <Form.Group controlId="name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="precis">
                        <Form.Label>Your Post</Form.Label>
                        <Form.Control name="precis" type="text" value={this.state.precis} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control name="date" type="text" value={this.state.date} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                   <Form.Group controlId="location">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control name="location" type="text" value={this.state.location} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Event
                </Button>
                </Form>
            </>
        );
    }
}

export default AddPost;