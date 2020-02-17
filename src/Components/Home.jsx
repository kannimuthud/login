import React, { Component } from 'react'
import '../Style/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid:false
    }
  }
  handleChange = event => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }
  click = (event) => {
    event.preventDefault();
    console.log(this.state)
    const data = { email: this.state.mail, password: this.state.password }
    fetch('http://interlace.interlockgroup.sg:3000/api/v1/users/login', { method: 'POST', body: JSON.stringify(data), headers: { 'content-Type': 'application/json' } })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          token: res.token,
        })
        if(res.success){
          window.location.assign("http://localhost:3000/welcome");
         }
      })
      .then(res=>  localStorage.setItem('token', JSON.stringify(this.state.token)))
      .then(res=>  localStorage.setItem('valid',true ))
      .catch(error => console.log('Error:', error))

      //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDUyNmZkN2Y4ZDg0M2ZhY2YzYjNmNSIsIm5hbWUiOnsiZmlyc3QiOiJOYXZlZW4iLCJsYXN0IjoiU2FrdGhpdmVsIn0sInJlc2V0Ijp0cnVlLCJpYXQiOjE1ODE5MzU4OTEsImV4cCI6MTU4MTkzOTQ5MX0.K-z9l4KfiBP0OtSnp9sDvfoyqMt7xVsNqoQXYUZtIlY

  }
 
  render() {
    return (
      <div    className="home"  >
        <h1>Log in</h1>
        <form onSubmit={this.click} className="form">
          <label>Email:</label>
        <input type="mail"
          name='mail'
          value={this.state.mail}
          onChange={this.handleChange} /><br/>
          <label>password:</label>
        <input type="password"
          name='password'
          minLength="8"
          value={this.state.password}
          onChange={this.handleChange} /><br/>
        <button  type="submit" >click me</button>
        </form> 
        
      </div>

    );
  }
}
export default Home