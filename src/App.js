import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import Home from './component/Home/Home';
import Notfund from './component/Notfund/Notfund';

import Footer from './component/Footer/Footer';
import Service from './component/service/Service';
import Teacher from './component/teachers/Teacher';
import Aboutus from './component/aboutus/Aboutus';

function App() {
  return (
  
   <div>
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path='/'>
         <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path='/service'>
           <Service></Service>
         </Route>
         <Route path="/teacher">
          <Teacher></Teacher>
         </Route>
         <Route path='/about'>
           <Aboutus></Aboutus>
         </Route>
         <Route path="*">
         <Notfund></Notfund>
         </Route>
       </Switch>
     
     {/* <Navigation></Navigation>
     <Home></Home> */}
     <Footer></Footer>
     {/* <Notfund></Notfund> */}
     </Router>
     

   </div>
    
  );
}

export default App;
