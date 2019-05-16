import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
  let displayCard = props.users.map(u => (<Card {...u} />))

  return (
    <section className='CardContainer'>
      {displayCard}
    </section>
  )
}

export default CardContainer;