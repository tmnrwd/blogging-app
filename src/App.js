import React from 'react';
import { ApiClient } from './ApiClient';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem("token"),
    }
    this.client = new ApiClient(
      () => this.state.token, () => this.logout() 
      )
  }

  login(token) {
    window.localStorage.setItem("token", token);
    this.setState({ token })
  }

  logout = (token) => {
    this.setState({ token: undefined })
    window.localStorage.removeItem("token");
  }

  
 render() {
    if (this.state.token) {
    return <LoggedIn deleteButtonToken={this.state.token} loggedIn={(token) => this.login(token)} token={this.state.token} client={this.client} logout={this.logout} />  }
    
    return <NotLoggedIn deleteButtonToken={this.state.token} loggedIn={(token) => this.login(token)} token={this.state.token} client={this.client} ></NotLoggedIn>
  }
}

export default App;
