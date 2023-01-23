import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost } from '../store'



function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.form.name)
  const cost = useSelector(state => state.form.cost)

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }

  const handleCostChange = (e) => {
    dispatch(changeCost(e.target.value))
  }




  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl py-1' >Add Car</h1>
      <div className='mt-6'>
        <form className=''>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-col'>
              <label htmlFor='make'>Name</label>
              <input value={name} onChange={handleNameChange} type='text' name='carName' id='carName' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='price'>Car Cost</label>
              <input value={cost} onChange={handleCostChange} type='number' name='price' id='price' />
            </div>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded mt-4' type='submit'>Add Car</button>
        </form>
      </div>
    </div>
  )
}

export default CarForm