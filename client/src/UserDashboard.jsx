import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const UserDashboard = () => {
  return (
    <div>
        <div className='usernav'>
        <Link to="/">Home</Link><br />
        <Link to="Userlogin">User Login</Link>
        </div>
        <div className='userdiv1' ><h1>Welcome to User Dashboard</h1></div>

<div>
  <Outlet/>
</div>
      

    </div>
  )
}

export default UserDashboard
