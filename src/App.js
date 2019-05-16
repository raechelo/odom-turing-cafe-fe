import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <CardContainer users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App;
