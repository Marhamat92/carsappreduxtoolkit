import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {

  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
      .reduce((acc, car) => acc + car.cost, 0)
  );



  return (
    <div className='flex '>
      <h1>Total Cost :</h1>
      <h1>${totalCost}</h1>
    </div>
  )
}

export default CarValue