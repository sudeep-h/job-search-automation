import React from 'react';
import {Link } from 'react-router-dom';

const Home=()=>{
    return(
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">Welcome to Job Search Automation</h1>
            <p className="mt-2">Find and apply for jobs automatically.</p>
            <Link to="/dashboard">
                <button className="mt-4 px-4 py-2 btn btn-primary">Get Started</button>
            </Link>
        </div>
    )
}

export default Home;