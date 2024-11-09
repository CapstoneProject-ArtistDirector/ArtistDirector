import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import Login from './components/login';
import Footer from './components/common/Footer';
import RegisterForm from './components/CastingDirector/RegisterForm';
import Navbar from './components/common/Navbar';
import RegistrationForm from './components/Artist/RegisterForm';
import OtherDetails from './components/Artist/OtherDetails';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      {/* <MainPage></MainPage> */}
      <LoginPage></LoginPage>
      {/* <BrowserRouter>
      <div className="MainPage">
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </BrowserRouter> */}
     {/* <BrowserRouter>
      <div className="RegistrationForm">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/other-details" element={<OtherDetails />} />
        </Routes>
      </div>
    </BrowserRouter> */}
      {/* <Login></Login> */}
      
      {/* <RegisterForm></RegisterForm> */}
      {/* <LoginPage></LoginPage> */}
      {/* //Original Navbar
      <Navbar></Navbar>
      //Original Footer Component
      <Footer></Footer> */}
    </>
  )
}

export default App
