import React from 'react'
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bottom() {
    const[loading,setloading]=useState(false);
    const navigate=useNavigate();
    const handellogout=async()=>{
        setloading(true);
        
             try {
            const res=await axios.post("/api/user/logout");
            localStorage.removeItem("chatAPP");
            Cookies.remove("jwt");
            setloading(false);
            alert("logged out successfully");
            window.location.reload();
        } catch (error) {
            console.log("error: in logout"+error);
        }
    }
       
    
    return (
        <div  >
            <div className=' ' >
                <div className="tooltip" data-tip="Logout">
                    <button className="">
                        <CiLogout className='mx-5 h-10 rounded-full text-5xl hover:bg-gray-700 duration-300 cursor-pointer' onClick={handellogout} /></button>
                </div>

            </div>

        </div>
    )
}

export default Bottom