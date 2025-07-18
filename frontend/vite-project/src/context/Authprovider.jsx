import { createContext } from "react"
import React from 'react'
import Cookies from "js-cookie"
import { useState } from "react"
import { useContext } from "react"
export const Authcontext=createContext()
export const Authprovider=({children})=> {
    const initialState=Cookies.get("jwt") || localStorage.getItem("chatAPP")
    const[auth,setauth]=useState(initialState? JSON.parse(initialState):undefined)

  return (
  <Authcontext.Provider value={[auth,setauth]}>
     {children}
  </Authcontext.Provider>
  )
}

export const useAuth=()=>useContext(Authcontext);