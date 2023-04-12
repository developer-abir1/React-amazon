import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { slug } = useParams()
  console.log()

  return (
    <div>
      <h1>This is single Products {slug}</h1>
    </div>
  )
}

export default Product
