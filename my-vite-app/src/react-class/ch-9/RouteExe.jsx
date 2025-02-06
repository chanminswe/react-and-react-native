import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function RouteExe() {

  const[product,setProduct] = useState('');
  const navigate = useHistory();

  function Click(){
    navigate.push(`/product/${product}`)
  }
  return (
    <div>
      <input value={product} onChange={(e) => setProduct(e.target.value)} />
      <button onClick={Click}>Find</button>
    
    </div>
  )
}