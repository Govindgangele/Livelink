import React from 'react'
import { FaUserSecret } from 'react-icons/fa'
import Chatuser from './Chatuser'
import Middle from './Middle'
import Bottom from './Bottom'
function Right() {
  return (
    <div className='w-[70%] bg-gray-800'>
      <Chatuser/>
      <Middle/>
      <hr />
      <Bottom/>
    </div>
  )
}

export default Right