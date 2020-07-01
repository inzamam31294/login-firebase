import React from 'react';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'

function App() {
  return (
    <Router>
      <div className="App flex justify-center items-center h-screen bg-gray-500">
        <Route exact path="/" render={ props => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )} />
        <Route path='/signup' component={ Signup } />
      </div>
    </Router>
  );
}

export default App;
