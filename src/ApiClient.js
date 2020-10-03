import axios from 'axios'

const url = 'https://frozen-earth-04266.herokuapp.com/postlist/'
const urlshort = 'https://frozen-earth-04266.herokuapp.com/'

//const url = 'http://localhost:3000/postlist/'
//const urlshort = 'http://localhost:3000/'

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider
    this.logoutHandler = logoutHandler
  }

  async login(username, password) {
    return await axios({
      method: 'post',
      url: `${urlshort}auth`,
      header: { authorization: this.tokenProvider() },
      data: {
        username,
        password
      }
    });
  }

  authenticatedCall(method, url, data) {
    return axios({
      method, url, 
      header: { authorization: this.tokenProvider() },
      data
    })
      .catch((error) => {
        if (error.response.status === 403) {
          this.logoutHandler();
          return Promise.reject()
        } else { throw error; }
      })
  }

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  getPosts() {
    return this.authenticatedCall('get', url)
  }

  newPost(title, tags, text, date) {
    return this.authenticatedCall('post', `${url}create`,
      {
        title,
        tags,
        text,
        date
      })
  }

  deletePost(id) {
    return this.authenticatedCall('delete', `${url}${id}`)
  }

  updatePost(id, title, tags, text, date) {
    return this.authenticatedCall('put', `${url}${id}`, { title,
      tags,
      text,
      date })
  }

  returnID(id) {
    return this.authenticatedCall('get', `${url}${id}`)
  }

}