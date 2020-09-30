import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            location: "",
            precis: "",
            date: 0,
            time: 0
        }
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.id, this.state.name, this.state.location, this.state.precis, this.state.date, this.state.time);
        this.setState({
            id: "",
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
                    <Form.Group controlId="id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control name="id" type="text" value={this.state.id} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" type="text" value={this.state.location} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="precis">
                        <Form.Label>Precis</Form.Label>
                        <Form.Control name="precis" type="text" value={this.state.precis} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control name="date" type="text" value={this.state.date} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control name="time" type="text" value={this.state.time} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Edit Post
                </Button>
                </Form>
            </>
        );
    }
}

export default UpdateEvent;