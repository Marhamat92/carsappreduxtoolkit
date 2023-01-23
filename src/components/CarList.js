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

  //! <--- destructuring the state object to get the searchTerm and data properties from the cars slice and the name property from the form slice and then filtering the data array to return only the cars that have the searchTerm in their name property and then returning an object with the filteredCars array and the name property of the form slice

  const renderedCars = cars.map((car) => {

    const bold = name && car.name.toLowerCase().includes(name.toLowerCase()) ? 'font-bold' : '';
    //! <--- ternary operator to check if the name property of the car object is included in the name property of the state object and if it is, then add the font-bold class to the p tag

    return (
      <div className='flex justify-between space-y-3 items-center shadow-lg mt-4 py-2 px-4 rounded-md' key={car.id}>
        <p className={`text-3xl ${bold}`} >{car.name} - ${car.cost}</p>
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