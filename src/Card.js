import React from 'react';

const Card = ({name, date, time, number}) => {
  return (
    <article>
      <h4>{name}</h4>
      <h5>{date}</h5>
      <h5>{time}</h5>
      <h5>{number}</h5>
    </article>
  )
}

export default Card;