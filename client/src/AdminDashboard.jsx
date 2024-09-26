import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <div className='usernav'>
        <Link to="/">Home</Link>
        <Link to="adminlogin">Login Admin</Link>

        </div>
        <div className='userdiv1' ><h1>Welcome to User Dashboard</h1></div>

 <div>
         <Outlet/>

         </div>
      
    </div>
  )
}

export default AdminDashboard
