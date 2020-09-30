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

  createPost(title, tags, text, date) {
    this.props.client.newPost(title, tags, text, date)
      .then((response) => {
        this.grabList(response);
      })
  }

  updatePost(id, title, tags, text, date) {
    this.props.client.updatePost(id, title, tags, text, date)
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
        <AddPost onSubmit={(id, title, tags, text, date) => this.createPost(id, title, tags, text, date)} />
        <br></br>
        <h4>Edit Post</h4>
        <EditPost onSubmit={(id, title, tags, text, date) => this.updatePost(id, title, tags, text, date)} />
        <br></br>
        <Button onClick={this.props.logout} >Logout</Button>
      </>
    );
  }
}

export default LoggedIn;