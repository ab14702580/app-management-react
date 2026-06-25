import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate();
    const navgateFun = navigate(-1)
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <img src="../../../B12-A08-Hero-Apps/assets/error-404.png" alt="image here" />
            <h1 className='text-5xl mt-5'>Page Not Found</h1>
            <NavLink to={navgateFun}><button className='btn'>go back</button></NavLink>
        </div> 
    );
};

export default PageNotFound;