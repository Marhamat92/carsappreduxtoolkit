import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'


function CarList() {


  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      cars: filteredCars,
      name: form.name
    }
  })

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car.id))
  }

  //! <--- destructuring the state object to get the searchTerm and data properties

  const renderedCars = cars.map((car) => {
    return (
      <div className='flex justify-between space-y-3 items-center shadow-lg mt-4 py-2 px-4 rounded-md' key={car.id}>
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