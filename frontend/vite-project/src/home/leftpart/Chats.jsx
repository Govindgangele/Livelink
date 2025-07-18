import React from 'react'
import Users from './users'
import Getalluser from '../../context/Getalluser'
import { all } from 'axios';

function Chats() {
    const[alluser,loading]=Getalluser();
    console.log(alluser);
    return (
        <>
            <div className=' w-[100%] h-[80%] bg-black overflow-y-scroll  no-scrollbar'>
                <div className='absolute top-[9.5%] z-10 w-[100%]'>

                    <h1 className='bg-gray-700 text-center  '>
                        Messages
                    </h1>
                </div>
                <div className='pt-5 max-h-[80%] z-0'>

                    {alluser.map((user,index)=>(
                       <Users key={index} user={user}/>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Chats