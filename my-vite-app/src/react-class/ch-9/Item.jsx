import React from 'react'
import { useParams } from 'react-router-dom'

function Item() {

    const {itemName} = useParams();

  return (
    <div>
        <p>Your ordered item is {itemName}</p>
    </div>
  )
}

export default Item