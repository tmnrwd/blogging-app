import React from 'react';
import ListPosts from './ListPosts';
import Login from './Login';

class NotLoggedIn extends React.Component {
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

  render() {
    return (
      <>
        <Login loggedIn={this.props.loggedIn} client={this.props.client} ></Login>
        <ListPosts deleteButtonToken={this.props.deleteButtonToken} loggedIn={this.props.loggedIn} token={this.state.token} client={this.props.client} posts={this.state.posts} deletePost={this.deletePost}></ListPosts>
      </>
    );
  }
}

export default NotLoggedIn;