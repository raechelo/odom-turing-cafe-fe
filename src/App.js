import React, { Component } from 'react';
import CardContainer from './CardContainer';
import ReservationForm from './ReservationForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({reservations}))
      .catch(err => new Error(err))
  }

  addReservation = (res) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res)
    })
    .then(res => res.json())
    .then(res => this.setState({ reservations: [...this.state.reservations, res]}))
    .catch(err => new Error(err))
  }

  deleteReservation = (id) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationForm addReservation={this.addReservation} />
          <CardContainer deleteReservation={this.deleteReservation} reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
