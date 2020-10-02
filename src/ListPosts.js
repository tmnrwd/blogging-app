import React from 'react';
import Card from 'react-bootstrap/Card'

class ListPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.createList = this.createList.bind(this);
  }

  createList = () => {
    if (this.props.deleteButtonToken){
        let postList = this.props.posts;
        postList = Array.from(postList)
        return postList.map((current) => (
          <>
          <Card 
          bg="dark" border="dark" text="light" 
          key={current._id}>
            <Card.Body>
            <Card.Title>
              {current.title}
            </Card.Title>
            <Card.Subtitle>
              Date: {current.date}
            </Card.Subtitle>
            <Card.Body>
              {current.text}
            </Card.Body>
            <br />
          Tags: {current.tags}
           </Card.Body>
          <button onClick={() => this.props.populateEditForm(current._id)}>Edit - make changes in editing form below</button>
          <button onClick={() => this.props.deletePost(current._id)}>Delete</button>
          </Card>
          <hr/>
          </>
        ))  
      } else {
        let postList = this.props.posts;
        postList = Array.from(postList)
        return postList.map((current) => (
          <>
          <Card 
          bg="secondary" border="secondary" text="light" style={{ width: '50rem' }}
          key={current._id}>
            <Card.Body>
            <Card.Title>
              {current.title}
            </Card.Title>
            <Card.Subtitle>
              Date: {current.date}
            </Card.Subtitle>
            <Card.Body>
              {current.text}
            </Card.Body>
            <br />
          Tags: {current.tags}
           </Card.Body>
          </Card>
          <hr/>
          </>
        ))
    }
  }

  render() {
    return (
      <>
        <div>
          <h1 >The Blog Pile</h1>
          {this.createList()}
        </div>
        <br></br>
      </>
    );
  }
}

export default ListPosts;