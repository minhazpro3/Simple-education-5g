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
       <h4> Early stage classes</h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
    
        <p>Children aged four to six are introduced to the performing arts through our fabulous range of Early Stages singing, dancing and acting classes. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6 className="text-warning">$ 70</h6>
        </div>   
      </div>
    </div>
  <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
       <h4> Secondary level classes</h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Secondary education covers two phases on the International Standard Classification of Education scale. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6 className="text-warning">$ 100</h6>
        </div>   
      </div>
    </div>
  <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
       <h4> Upper lavel classes</h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
    
        <p>Upper secondary education. According to the Education Act, every student who successfully completes basic education has access to upper secondary education. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6 className="text-warning">$ 300</h6>
        </div>   
      </div>
    </div>
  <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
       <h4> Diploma in Engineering</h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
    
        <p>It is a 4-year termed diploma course on engineering disciplines aimed to make efficient supervisor and mid level manager to implement the engineering projects. </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6 className="text-warning">$ 400</h6>
        </div>   
      </div>
    </div>
  <div className="col-md-4">
      <div className="card serviceCard h-100 card-2 ">
       <h4> Career counselling </h4>
       <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <p>Attending career counselling workshops at your university is the perfect way to explore your motivations and assets, </p>
        <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-info"> Enroll Now</button>
            <h6 className="text-warning">$ 140</h6>
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
            <h6 className="text-warning">$ 125</h6>
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
            <h6 className="text-warning">$ 100</h6>
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
            <h6 className="text-warning">$ 90</h6>
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
            <h6 className="text-warning">$ 150</h6>
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
            <h6 className="text-warning">$ 175</h6>
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
            <h6 className="text-warning">$ 200</h6>
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
            <h6 className="text-warning">$ 250</h6>
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
            <h6  className="text-warning">$ 290</h6>
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card serviceCards h-100 card-3">
      <div className="row">
        <div className="col-md-6 h-100">
        <h2>There are for little sweethearts,<br/><small className="text-warning"> Little Lambs!</small> </h2>
        <h6>Status: <small className="text-success fw-bolder">Active</small></h6>
        <br/>
        
        <div className="d-flex align-items-end mt-5 mb-0 pb-0 justify-content-between">
            <button className="btn btn-info text-align-bottom"> Enroll Now</button>
            <h6 className="text-warning"> Only for you $220</h6>
        </div>
        </div>
        <div className="col-md-6 ">
         <div className="child img-fluid">

         </div>
         <h6 className="text-center mt-2">Little Sonamni is reading</h6>
        </div>
      </div>
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;