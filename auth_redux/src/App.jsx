import React from 'react'
import Form from './Components/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

import About from './Components/About'
import Header from "./Components/Header"
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Service from './Components/Service'


function App() {
  return (
    <>
     <Header/>
        <div className='flex justify-center items-center'>
            <Routes>
                
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Form/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/register' element={<Register/>}/>
              
            </Routes>
        </div>
     
       
    </>
  )
}

export default App