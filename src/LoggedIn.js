import React from 'react';
import AddPost from './AddPost';
import EditPost from './EditPost';
import ListPosts from './ListPosts';
import Button from 'react-bootstrap/Button';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [

      ]
    }
  }

  componentDidMount() {
    this.grabList()
  }

  updatePostList = (response) => {
    const postArray = response.data
    this.setState(() => ({
      posts: postArray
    }));
  }

  grabList = () => {
    this.props.client.getPosts()
      .then((response) => {
        this.updatePostList(response);
      })
  }

  createPost(name, location, precis, date, time) {
    this.props.client.newPost(name, location, precis, date, time)
      .then((response) => {
        this.grabList(response);
      })
  }

  updatePost(id, name, location, precis, date, time) {
    this.props.client.updatePost(id, name, location, precis, date, time)
      .then((response) => {
        this.grabList(response);
      })
      .then(this.status)
      .catch(function (error) {
        // handle error
        console.error(error);
        alert(error)
      })
  }

  deletePost = (id) => {
    this.props.client.deletePost(id)
      .then((response) => {
        this.grabList(response);
      })
  }

  render() {
    return (
      <>
        <ListPosts deleteButtonToken={this.props.deleteButtonToken} loggedIn={this.props.loggedIn} token={this.state.token} client={this.props.client} posts={this.state.posts} deletePost={this.deletePost}></ListPosts>
        <h3>Create Post</h3>
        <AddPost onSubmit={(id, name, location, precis, date, time) => this.createPost(id, name, location, precis, date, time)} />
        <br></br>
        <h4>Edit Post</h4>
        <EditPost onSubmit={(id, name, location, precis, date, time) => this.updatePost(id, name, location, precis, date, time)} />
        <br></br>
        <Button onClick={this.props.logout} >Logout</Button>
      </>
    );
  }
}

export default LoggedIn;