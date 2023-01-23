import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, addCar } from '../store'



function CarForm() {
  const dispatch = useDispatch(); // this is the hook that allows us to dispatch actions to the store
  const { name, cost } = useSelector((state) => { // this is the hook that allows us to access the store
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })


  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost))

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }))
  }



  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl py-1' >Add Car</h1>
      <div className='mt-6'>
        <form onSubmit={handleSubmit} className=''>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-col'>
              <label className='text-xl' htmlFor='make'>Name</label>
              <input className=' border border-gray-500 rounded-md py-2
              
              ' value={name} onChange={handleNameChange} type='text' name='carName' id='carName' />
            </div>
            <div className='flex flex-col'>
              <label className='text-xl' htmlFor='price'>Car Cost</label>
              <input className=' border border-gray-500 rounded-md py-2
              
              ' value={cost || ''} onChange={handleCostChange} type='number' name='price' id='price' />
            </div>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3  px-8 rounded mt-4' type='submit'>Add Car</button>
        </form>
      </div>
    </div>
  )
}

export default CarForm