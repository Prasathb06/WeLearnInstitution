// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar1 from './Component/Navbar1';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import Home from './Component/Home';
import HideNavbar from './Component/HideNavbar';
import Login from './AdminPanel/Login';
import Footer from './Component/Footer'
import AdminController from './AdminPanel/AdminController';
import UserEdit from './AdminPanel/UserEdit';
import HTMLandCSS from './Component/HTMLandCSS';
import Java from './Component/Java';
import Cards from './Component/Cards';
import JavaScript from './Component/JavaScript';
// import Tutorials from './Component/Tutorials';



function App() {
  return (
    <>  
    <BrowserRouter>
    <HideNavbar><Navbar1/>
    </HideNavbar>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/AdminCon' element={<AdminController></AdminController>}/>
      {/* <Route path='/tutorial' element={<Tutorials></Tutorials>}/> */}
      <Route path='/card' element={<Cards></Cards>}/>
      <Route path='/HC' element={<HTMLandCSS></HTMLandCSS>}/>
      <Route path='/java' element={<Java></Java>}/>
      <Route path='/javascript' element={<JavaScript></JavaScript>}/>
      <Route path='/Admin' element={<Login></Login>}/>
      <Route path='/Uedit' element={<UserEdit></UserEdit>}/>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path='/register' element={<RegisterPage></RegisterPage>}/>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
   </>
    
  )
}

export default App
