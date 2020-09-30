import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card'

class ListPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.createList = this.createList.bind(this);
  }


  createList = () => {
    if (this.props.deleteButtonToken) {

    let type = typeof (response)
    if (type !== "array") {
      let postList = this.props.posts;
      postList = Array.from(postList)
      return postList.map((current) => (
        <Card>
           <Card.Title>
            {current.name}
            </Card.Title>
           <Card.Subtitle>
            Date: {current.date}
            </Card.Subtitle>
          <Card.Body>
            {current.precis}
            </Card.Body>
           Date posted: {current.time}
            <br/>
          Tags: {current.location}
            <br/>
            {current._id}
           <button onClick={() => this.props.deletePost(current._id)}>Delete</button>
          </Card>  
        
      ))
    } else {
      return this.props.posts.map((current) => (
        <Card>
           <Card.Title>
            {current.name}
            </Card.Title>
           <Card.Subtitle>
            Date: {current.date}
            </Card.Subtitle>
          
            
           
           <Card.Body>
            {current.precis}
            </Card.Body>
           
           
          Date posted: {current.time}
            <br/>
          Tags: {current.location}
            <br/>
            {current._id}
           
           
          <button onClick={() => this.props.deletePost(current._id)}>Delete</button>
          </Card>  
      )
      )
      }
    } else {

      let type = typeof (response)
      if (type !== "array") {
        let postList = this.props.posts;
        postList = Array.from(postList)
        return postList.map((current) => (
          <Card>
             <Card.Title>
              {current.name}
              </Card.Title>
             <Card.Subtitle>
              Date: {current.date}
              </Card.Subtitle>
            
              
             
             <Card.Body>
              {current.precis}
              </Card.Body>
             
             
            Date posted: {current.time}
              <br/>
            Tags: {current.location}
              <br/>
              {current._id}
            </Card>  
          
        ))
      } else {
        return this.props.posts.map((current) => (
          <Card>
             <Card.Title>
              {current.name}
              </Card.Title>
             <Card.Subtitle>
              Date: {current.date}
              </Card.Subtitle>
            
              
             
             <Card.Body>
              {current.precis}
              </Card.Body>
             
             
            Date posted: {current.time}
              <br/>
            Tags: {current.location}
              <br/>
              {current._id}
            </Card>  
        )
        )
        }
      
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>The Blog Pile</h1>
          <Table striped bordered hover>

              {this.createList()}

          </Table>
        </div>
<br></br>

      </>
    );
  }
}

export default ListPosts;