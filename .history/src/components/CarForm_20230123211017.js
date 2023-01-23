import React from 'react'

function CarForm() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl py-1' >Add Car</h1>
      <div className='mt-6'>
        <form className=''>
          <div className='flex flex-row space-x-2'>
            <div className='flex flex-col'>
              <label htmlFor='make'>Name</label>
              <input type='text' name='carName' id='carName' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='price'>Car Cost</label>
              <input type='text' name='price' id='price' />
            </div>
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded ' type='submit'>Add Car</button>
        </form>
      </div>
    </div>
  )
}

export default CarForm