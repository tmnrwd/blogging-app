import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchEvent extends React.Component {
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

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.id, this.state.name, this.state.location, this.state.precis, this.state.date, this.state.time);
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
                <Form.Group controlId="taskID">
                    <Form.Label>Event ID</Form.Label>
                    <Form.Control name="id" type="string" value={this.state.id} onChange={(e) => this.handleChange(e)}></Form.Control>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            </>
        );
    }
}

export default SearchEvent;