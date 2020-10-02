import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            tags: [],
            text: "",
            date: 0
        }
    }

    handleChange(event) {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState)
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.title, this.state.tags, this.state.text, );
        this.setState({
            id: "",
            title: "",
            tags: "",
            text: ""
        })
    }

    clearCreateForm = ()=> {
        this.setState({
            id: "",
            title: "",
            tags: "",
            text: ""
        })
    }

    render() {
        return (
            <>
            <h3>Create Post</h3>
                <Form onSubmit={(e) => this.submitHandler(e)}>
                <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" value={this.state.title} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control name="text" as="textarea" rows="4" value={this.state.text} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags - Please separate tags with a space and a comma</Form.Label>
                        <Form.Control name="tags" type="text" value={this.state.tags} onChange={(e) => this.handleChange(e)}></Form.Control>
                    </Form.Group>
                <Button variant="info" type="submit">
                        Add Post
                </Button>
                <i>   </i>
                <Button variant="info" onClick={this.clearCreateForm}>
                        Clear
                </Button>
                </Form>
            </>
        );
    }
}

export default AddPost;