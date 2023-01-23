import React from 'react'

function CarSearch() {
  return (
    <div>
      <div className='flex justify-between mt-10' >
        <h1 className='text-4xl font-bold' >My Cars</h1>
        <div className='flex space-x-3 items-center' >
          <label htmlFor="">Search</label>
          <input className=' border border-gray-500 py-2' type="text" />
        </div>
      </div>
    </div>
  )
}

export default CarSearch