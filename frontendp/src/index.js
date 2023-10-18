import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynavbar from './modules/shares/Mynavbar';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import UserRegistor from './modules/auth/UserRegistor';
import Landingpage from "./modules/dashboard/Landingpage"
import Userlogin from './modules/auth/Userlogin';
import Detailspage from './modules/dashboard/Detailspage'
import Editpage from './modules/dashboard/Editpage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <Mynavbar/> 
          <Routes>
              <Route path="/" element={<Userlogin/>}/>
              <Route path="/landing" element={<Landingpage/>}/>
              <Route path="registor" element={<UserRegistor/>}/>
              <Route path="landing/details/:id" element={<Detailspage/>}/>
              <Route path="landing/editrecord/:id" element={<Editpage/>}/>

              
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

