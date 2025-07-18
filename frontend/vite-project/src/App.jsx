import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './home/leftpart/left'
import Right from './home/rightpart/right'
import Signup from './components/signup'
import Login from './components/Login'
import { useAuth } from './context/Authprovider'
import { Navigate, Route, Routes } from 'react-router-dom'

// import Loading from './components/Loading'
function App() {

  const [auth, setauth] = useAuth();
  console.log(auth);
  return (
    <>
      <Routes>
        <Route path='/' element={
          auth?
          <div className='flex h-screen'>
            <Left />
            <Right />

          </div>:(<Navigate to={'/login'}/>)
        } />
        <Route path='/login' element={auth?<Navigate to={'/'}/>:<Login/> } />
        <Route path='/signup' element={auth?<Navigate to={'/'}/>:<Signup />}/>
      </Routes>

      
      
    </>
  )
}

export default App
