import React from 'react'

function CarForm() {
  return (
    <div className='flex items-center justify-center'>
      <h1 className='font-bold text-2xl' >Add Car</h1>
      <div className='mt-4'>
        <form className='flex flex-row'>
          <label htmlFor='make'>Make</label>
          <input type='text' name='make' id='make' />
          <label htmlFor='model'>Model</label>
          <input type='text' name='model' id='model' />
          <label htmlFor='year'>Year</label>
          <input type='text' name='year' id='year' />
          <label htmlFor='color'>Color</label>
          <input type='text' name='color' id='color' />
          <label htmlFor='price'>Price</label>
          <input type='text' name='price' id='price' />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' type='submit'>Add Car</button>
        </form>
      </div>
    </div>
  )
}

export default CarForm