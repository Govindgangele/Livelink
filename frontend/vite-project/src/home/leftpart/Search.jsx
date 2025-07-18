import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
    <div >
      <form action=" " >
        <div className='flex space-x-3 p-2'>
          <label className="p-1.5 w-[90%] h-12  input input-bordered flex items-center  ">
            <input type="text" className=" outline-none rounded-2xl grow px-4 h-[100%] bg-gray-700 hover:scale-101 duration-300" placeholder="Search" />

          </label>
          <button >
            <FaSearch className='text-3xl p-1 hover:bg-gray-600 rounded-full duration-300' />

          </button>
        </div>
      </form>
    </div>
  )
}

export default Search