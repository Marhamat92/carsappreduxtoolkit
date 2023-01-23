import React from 'react'
import { useSelector } from 'react-redux'


function CarList() {

  const cars = useSelector((state) => {
    return state.cars.data;
  })


  const renderedCars = cars.map((car) => {
    return (
      <li key={car.id}>
        {car.name} - {car.cost}
      </li>
    )
  })




  return (
    <div>{renderedCars}</div>
  )
}

export default CarList