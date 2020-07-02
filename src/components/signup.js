import React from 'react';
import { myFirebase } from "../plugins/firebaseConfig";

class Signup extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    confirmPassword: ''
  }
 }
 
  resetForm() {
    this.setState({ email: '' })
    this.setState({ password: '' })
    this.setState({ confirmPassword: '' })
  } 

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
  
  signUp = (e) => {
    e.preventDefault()
    if(this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.email !== ''){
    myFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    this.resetForm()
    }else{
      alert('please fill the form correctly!')
    }
    
  }

  render(){
    return (
      <div className="cont flex flex-col items-center">
        <h1 className="uppercase text-5xl">sign up</h1>
        <form onSubmit={this.signUp}>
            <div className="py-2">
            <input className="bg-gray-400 rounded w-64" type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder=" Email"></input>
            </div>
            <div className="py-2">
            <input className="bg-gray-400 rounded w-64" name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder=" Password"></input>
            </div>
            <div className="pt-2 pb-4">
            <input className="bg-gray-400 rounded w-64" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} placeholder=" Confirm Password"></input>
            </div>
            <div className="text-center">
            <button type="submit" className="bg-orange-500 px-2 rounded w-20">Sign up</button>
            </div>
        </form>
          <a href="/" className="text-blue-700">Login</a>
      </div>
    );
  }
}

export default Signup;
