import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Cookies from "js-cookie"
function Getalluser() {
   const[alluser,setalluser]=useState([]);
   const[loading,setloading]=useState([]);
   useEffect(()=>{
    const getuser=async()=>{
         setloading(true);
        try {
            const token=Cookies.get("jwt");
            const response=await axios.get("/api/user/alluser",{
                
                headers:{
                    Authorization:`Bearer ${token}`,
                },
                withCredentials: true,
            });
            setalluser(response.data);
            setloading(false);
        } catch (error) {
            console.log("error :in getalluser"+error);
        }
    }
    getuser()
   },[])
    return[alluser,loading] ;
  
}

export default Getalluser