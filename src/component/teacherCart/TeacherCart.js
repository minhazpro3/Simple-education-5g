import React from 'react';
import './TeacherCart.css'

const TeacherCart = (props) => {
   
    const {name,img,position,Qualifications,identity}=props.info;
    return (
     <div className="col  g-4">
        <div className="card  h-100 bg-secondary shadow-lg p-3 mb-5 bg-body rounded gap-2">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body TeachCard">
          <h5 className="card-title">{name}</h5>
          <h6 className="qualification"> {Qualifications} </h6>
          <h6 className="rank"> {position} </h6>
          <p className="card-text">{identity}</p>
          <div className="mt-5 mb-0">
              <button className="btn btn-success">View more</button>
          </div>
          
          
        </div>
      </div>

      
     </div>
    );
};

export default TeacherCart;