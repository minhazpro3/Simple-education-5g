import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeCart.css'

const HomeCart = (props) => {
   
    const {caragory,description,img}=props.catagory;
    return (
        <div className="col container ">
        
       <div className=" card home-div">
       <div>
         <img  src={img} className="card-img-top image" alt="..."/>
         </div>
          <div className="card-body">
            <h5 className="card-title">{caragory}</h5>
            <p className="card-text">{description}</p>
          
          </div>
          <div className="d-flex justify-content-between container my-3">
            <div>
            <NavLink className="btn btn-info text-decoration-none " to="/service">Details</NavLink>
            </div>
        
          </div>
       </div>
       
      </div>
    );
};

export default HomeCart;