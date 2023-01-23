import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {

  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
      .reduce((acc, car) => acc + car.cost, 0)
  );



  return (
    <div className='flex  space-x-6'>
      <h1 className='text-2xl font-bold text-green-500' >Total Cost :</h1>
      <h1 className='text-2xl font-bold text-slate-800'>${totalCost}</h1>
    </div>
  )
}

export default CarValue