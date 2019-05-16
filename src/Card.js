import React from 'react';

const Card = ({name, date, time, number}) => {
  return (
    <article className='Card'>
      <h4>{name}</h4>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Card;