import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Dashboard() {

    const user=JSON.parse(localStorage.getItem("user"))
    
  return (
        <>

        {user.username==="admin"?<div>Dashboard</div>:<Navigate to={"/"} />}
        
        
        
        </>

   
    
  )
}

export default Dashboard