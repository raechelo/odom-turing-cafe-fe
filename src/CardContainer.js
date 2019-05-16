import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
  let displayCard = props.reservations.map(r => (<Card {...r} />))

  return (
    <section className='CardContainer'>
      {displayCard}
    </section>
  )
}

export default CardContainer;