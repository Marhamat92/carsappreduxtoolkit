import React from 'react'
import { useSelector } from 'react-redux'


function CarList() {

  const cars = useSelector((state) => {
    return state.cars.data;
  })


  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id}>
        <p className='text-3xl' >{car.name} - ${car.cost}</p>
      </div>
    )
  })




  return (
    <div>{renderedCars}</div>
  )
}

export default CarList