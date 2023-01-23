import React from 'react'
import { useSelector } from 'react-redux'


function CarList() {

  const cars = useSelector((state) => {
    return state.cars.data;
  })


  const renderedCars = cars.map((car) => {
    return (
      <div className='flex space-x-3 space-y-3 items-center justify-center' key={car.id}>
        <p className='text-3xl' >{car.name} - ${car.cost}</p>
        <button className='bg-red-500 px-4  rounded-md'>
          Remove
        </button>
      </div>
    )
  })




  return (
    <div>{renderedCars}</div>
  )
}

export default CarList