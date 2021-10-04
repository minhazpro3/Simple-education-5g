import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
      <div className="header-div">
        <Navigation></Navigation>
         <div className="row container">
        
        <div className="col-md-6 p-5">
        <div className="ms-5 fs-1 py-4">
        <h1>Welcome To Our  <br/> Education Family.</h1>

        <button className="btn btn-info">View more</button>
        </div>
        </div>
        <div className="col-md-6">
       
        </div>
        </div>
      </div>
       
         
            
           
      
    );
};

export default Header;