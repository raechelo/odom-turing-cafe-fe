import React from 'react';

const Card = ({name, date, time, number, id, deleteReservation}) => {
  return (
    <article className='Card'>
      <h4>{name}</h4>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of Guests: {number}</p>
      <button onClick={(() => deleteReservation(id))}>Cancel</button>
    </article>
  )
}

export default Card;