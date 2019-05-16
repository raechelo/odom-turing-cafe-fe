import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: undefined
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReservation(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="ResForm">
      <input onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder="Name" />
      <input onChange={this.handleChange} name="date" type="text" value={this.state.date} placeholder="Date (MM/YY)" />
      <input onChange={this.handleChange} name="time" type="text" value={this.state.time} placeholder="Time" />
      <input onChange={this.handleChange} name="number" type="number" value={this.state.number} placeholder="Number of Guests" />
      <button>Make Reservation</button>
    </form>
    )
  }
}

export default ReservationForm;