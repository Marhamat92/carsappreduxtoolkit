import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'


function CarList() {


  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  })

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car.id))
  }



  const renderedCars = cars.map((car) => {
    return (
      <div className='flex space-x-3 space-y-3 items-center' key={car.id}>
        <p className='text-3xl' >{car.name} - ${car.cost}</p>
        <button onClick={() => handleDeleteCar(car)} className='bg-red-500 px-4 py-2 text-3xl rounded-md'>
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