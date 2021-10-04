import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className="service-div">
            {/* this section build with css cards */}
            <h2 className="text-center"> Our Services</h2>
    <div className="container">
  <div className="row g-4">
  <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
     
       <h4> Career counselling </h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
    
        <p>Attending career counselling workshops at your university is the perfect way to explore your motivations and assets, </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 140</h6>
        </div>
          
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
        <h4>Campus healthcare</h4>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Some universities offer a student medical service on campus with flexible appointments, </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 125</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h4>Networking training and events</h4>
        <h6>Status: <small className="text-danger fw-bolder">Inactive</small></h6>
        <p>Learn how to easily customize and modify your app’s design to fit your
          brand across all mobile platform styles.</p>
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 100</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h4>Student counsellors</h4>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Everyone feels overwhelmed by university at least once during their studies – and there’s absolutely no reason to face this feeling alone. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 90</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h3>Language center</h3>
        <h6>Status: <small className="text-danger fw-bolder">Inactive</small></h6>
        <p>Having an extra language on your CV will improve your employability and increase your chances of finding work after you graduate.</p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 150</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h3>Student gym</h3>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Your university should have a student gym on campus, typically at a very affordable rate and conveniently located for dropping in before or after lectures. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 175</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h3>Study training and workshops</h3>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Some universities offer study skills workshops and training courses to teach students effective revision strategies and time management. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 200</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h3>Different schools offer different levels of support.</h3>
        <h6>Status: <small className="text-danger fw-bolder">Inactive</small></h6>
        <p>All colleges that get federal funds must ensure equal access to students with disabilities. That means they have to provide reasonable accommodations.</p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 250</h6>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card serviceCard h-100 card-3">
        <h3>You’re no longer automatically in the loop.</h3>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>When your child was in high school, you were legally entitled to be part of the process. That’s not true when your child is in college.</p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6>$ 290</h6>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;