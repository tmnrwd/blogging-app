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
      ],
      editingPost: {
        _id: " ",
        title: "",
        text: "",
        tags: "",
      }
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

  populateEditForm = (id) => {
    this.props.client.returnID(id)
    .then((response) => {
      const editData = response.data
      this.setState(() => ({
        editingPost: editData
      }));
    });
  }

  clearEditForm = () => {
    this.setState(() => ({
      editingPost: {
        _id: " ",
        title: "",
        text: "",
        tags: "",
      }
    }))
  }

  updatePost = (id, title, tags, text) => {
    console.log(id, title, tags, text)
    this.props.client.updatePost(id, title, tags, text)
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
        <ListPosts deleteButtonToken={this.props.deleteButtonToken} loggedIn={this.props.loggedIn} token={this.state.token} client={this.props.client} posts={this.state.posts} deletePost={this.deletePost} populateEditForm={this.populateEditForm}></ListPosts>
        <AddPost onSubmit={(id, title, tags, text, date) => this.createPost(id, title, tags, text, date)} />
        <br></br>
        <hr/>
        <EditPost onSubmit={(id, title, tags, text, date) => this.updatePost(id, title, tags, text, date)} editingPost={this.state.editingPost} clearEditForm={this.clearEditForm}/>
        <br></br>
        <Button variant="info" onClick={this.props.logout} >Logout</Button>
      </>
    );
  }
}

export default LoggedIn;