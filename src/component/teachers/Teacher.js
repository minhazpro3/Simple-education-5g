import React, { useEffect, useState } from 'react';
import TeacherCart from '../teacherCart/TeacherCart';

const Teacher = () => {
        const [teacher, setTeacher]=useState([])
    useEffect(()=>{
        fetch('./Teachers.json')
        .then(res=>res.json())
        .then(data=>setTeacher(data))
    },[])
    return (
        <div className="teacher-div container mt-4">
            <h2>Our Teachers!</h2>
          <div className="row row-cols-1 row-cols-md-3 ">
          {
                teacher.map(info=><TeacherCart key={info.id} info={info}></TeacherCart>)
            }
          </div>
        </div>
    );
};

export default Teacher;