import React from "react";
import Sidebar from '../../components/SideBar';


const Dashboard=()=>{
    return(
        <div className="d-flex">
            <Sidebar />
      <div className="container-fluid p-4">
        <h2>Dashboard</h2>
        <p>Track your job applications and manage your profile.</p>
      </div>
    </div>
    )
}

export default Dashboard;