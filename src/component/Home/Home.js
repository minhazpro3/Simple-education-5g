import React, { useEffect, useState } from 'react';
import HomeCart from '../Home-Cart/HomeCart';
import './Home.css'

const Home = () => {
    
    const [level, setLevel]=useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setLevel(data))
    },[])
    return (
      <div className="home  mt-3">
          <h2 className="text-center pt-3 ">Our Classes</h2>
          
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-0">
                {
                    level.map(catagory=><HomeCart key={catagory.id} catagory={catagory}></HomeCart>)
                }
            </div>
            
        
      </div>
    );
};

export default Home;