import React from 'react'
import Search from './Search'
import Chats from './Chats'
import Bottom from './Bottom'

function Left() {
  return (
    <div className='relative w-[30%] bg-black text-amber-50 '>
        <Search/>
        
        <Chats/>
        
        <Bottom/>
    </div>
  )
}

export default Left