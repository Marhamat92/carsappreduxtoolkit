import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store'


function CarSearch() {

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {

    return state.cars.searchTerm

  })

  const handleSearchCarTerm = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }



  return (
    <div>
      <div className='flex justify-between mt-10 border-b-gray' >
        <h1 className='text-4xl font-bold' >My Cars</h1>
        <div className='flex space-x-3 items-center' >
          <label className='text-lg' htmlFor="">Search</label>
          <input value={searchTerm} onChange={handleSearchCarTerm} className='pl-2 border border-gray-500 py-2 rounded-md' type="text" />
        </div>
      </div>
    </div>
  )
}

export default CarSearch