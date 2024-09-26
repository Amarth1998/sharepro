import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';
import UserRegister from './UserRegister';
import Userlogin from './Userlogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        
        <Route path="/userdashboard" element={<UserDashboard />} >
        <Route index element={<UserRegister />} />
          <Route path="Userlogin" element={<Userlogin />} />
        </Route>


  
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route index element={<AdminRegister />} />
          <Route path="adminlogin" element={<AdminLogin />} />
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
