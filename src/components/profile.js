import React from 'react'
import { Redirect } from 'react-router-dom'
import { myFirebase } from "../plugins/firebaseConfig"

// export const UserContext = createContext({authUser: null})
class Profile extends React.Component {
    state = {
        authUser: null,
        redirect: null
    }

    componentDidMount = () => {
        myFirebase.auth().onAuthStateChanged((user) => {
            this.setState({ authUser: user })
        })

    }

    logout = (e) => {
        e.preventDefault()
        myFirebase.auth().signOut()
        this.setState({redirect: '/'})

    }

render(){
        let email
        if(this.state.authUser && this.state.authUser.email){
         email  = this.state.authUser.email
        }
    if(this.state.redirect){
       return <Redirect to={ this.state.redirect } />
    }
        return (
            <div className="text-center">
                <h1> Hello! { email } </h1>
                <div>
                  <button onClick={this.logout} className="bg-orange-500 px-2 rounded">Logout</button>
                </div>
            </div>
           
            )
        }
}

export default Profile
