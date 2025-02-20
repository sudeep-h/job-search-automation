import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "../components/NavBar";
import Home from '../pages/Home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard/dashboard';

const AppRouter=()=>{
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/*Public Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/*Protected dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;