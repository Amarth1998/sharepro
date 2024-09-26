import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className='HOMEDIV'> 
      <span>Logo Pvt LTD</span>
      <span><Link to="userdashboard">GO USER DASHBOARD</Link></span> 
     <span><Link to="admindashboard">GO ADMIN DASHBOARD</Link> </span> 
      </div>

      <div className='homediv1'>
         <h1>Welcome</h1>
      </div>
    </>
  );
};
export default Home;
