// src/App.js
import React from 'react';
import HomePage from './components/HomePage';
import { Routes } from 'react-router-dom'; 
import { Route } from 'react-router-dom';
import PhotographerSection from './components/PhotographerSection';
import RegisterWithCurve from './components/RegisterWithCurve';
import Footer from './components/Footer';
import VeiwPage from './components/VeiwPage';
import ReviewCard from './components/ReviewCard ';
import './App.css';
import RegisterPage from './components/RegisterPage';
import FeatureSection from './components/FeatureSection ';
import NavBar from './components/NavBar';
import PhotographerPost from './components/PhotographerPost';
import ContactForm from './components/ContactForm';
import SendSMSToPhotographer from './components/SendSMSToPhotographer';
import Register from './components/Register';
import LoginPage from './components/LoginPage.js';
// import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
   
      
       <Routes>
     {/* <Route  path='/' element={<HomePage/>}/> */}
     <Route index element={<><HomePage/> <FeatureSection />
      <PhotographerSection />
      <RegisterWithCurve />
      <ReviewCard /> </>} />

<Route path={'/register'} element={<RegisterPage/>}/>
<Route path={'/view'} element={<VeiwPage/>}/>
<Route path={'/contact'} element={<ContactForm/>}/>
<Route path="/post/:id" element={<PhotographerPost />} />
<Route path="/book" element={<SendSMSToPhotographer  />} />
<Route path="/registeruser" element={<Register  />} />
<Route path="/login" element={<LoginPage  />} />


    </Routes>

   
    {/* <HomePage/> */}
      
      <NavBar></NavBar>
      
      <Footer /> 




    </div>
  );
};

export default App;
