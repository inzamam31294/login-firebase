import React from 'react';
import { Redirect } from 'react-router-dom'
import { myFirebase } from "../plugins/firebaseConfig";

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    redirect: null
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  Login = (e) => {
    e.preventDefault()
    if(this.state.email !== '' && this.state.password !== ''){
      myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({redirect: '/profile'})
      alert('your are logged in!')
    }
  }
  

  render(){

    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div className="cont flex flex-col items-center">
        <h1 className="uppercase text-center text-5xl">login</h1>
        <form onSubmit={this.Login}>
          <div className="py-2">
          <input className="bg-gray-400 rounded w-64" type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder=" Email"></input>
          </div>
          <div className="pt-2 pb-4">
          <input className="bg-gray-400 rounded w-64" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder=" Password"></input>
          </div>
          <div className="text-center">
          <button type="submit" className="bg-orange-500 px-2 rounded w-20">Login</button>
          </div>
        </form>
          <a href="/signup" className="text-blue-700">Sign Up!</a>
      </div>
    );
  }
}

export default Login;
