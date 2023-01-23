import React from 'react'

function CarSearch() {
  return (
    <div>
      <div className='flex justify-between mt-10' >
        <h1 className='text-4xl font-bold' >My Cars</h1>
        <div>
          <label htmlFor="">Search</label>
          <input className='border-gray-500' type="text" />
        </div>
      </div>
    </div>
  )
}

export default CarSearch