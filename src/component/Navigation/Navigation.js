import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation container py-4 gap-4 ">
         <NavLink className="text-white text-decoration-none" activeStyle={{
            fontWeight: "bold"
             }} to="/home">Home</NavLink>

         <NavLink className="text-white text-decoration-none" activeStyle={{
            fontWeight: "bold"
            }} to="/service">Service</NavLink>
         <NavLink className="text-white text-decoration-none" activeStyle={{
            fontWeight: "bold"
            }} to="/teacher">Teacher</NavLink>
         <NavLink className="text-white text-decoration-none" activeStyle={{
            fontWeight: "bold"
             }} to="/about">About us</NavLink>
        </div>
    );
};

export default Navigation;