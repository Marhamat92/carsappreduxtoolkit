import React from 'react'

function CarForm() {
  return (
    <div className='flex items-center justify-center'>
      <h1 className='font-bold text-2xl' >Add Car</h1>
      <div className='mt-4'>
        <form className='flex flex-row'>
          <div>
            <label htmlFor='make'>Name</label>
            <input type='text' name='carName' id='carName' />
          </div>
          <div>
            <label htmlFor='price'>Car Cost</label>
            <input type='text' name='price' id='price' />
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' type='submit'>Add Car</button>
        </form>
      </div>
    </div>
  )
}

export default CarForm