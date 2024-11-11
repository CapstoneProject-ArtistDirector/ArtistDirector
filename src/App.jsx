import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer';
import RegisterForm from './components/CastingDirector/RegistrationForm';
import Navbar from './components/common/Navbar';
import RegistrationForm from './components/Artist/RegisterForm';
import OtherDetails from './components/Artist/OtherDetails';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainApp from './components/LandingPage';
import LoginForm from './components/common/LoginForm';
import SignupFormDirector from './components/common/SignupFormDirector';
import SignupFormArtist from './components/common/SignupFormArtist';
import LandingPage from './components/LandingPage';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup-artist" element={<SignupFormArtist/>}/>
          <Route path="/signup-director" element={<SignupFormDirector/>}/>
          <Route path="/register-artist" element={<RegisterForm/>}/>
          <Route path="/register-director" element={<RegistrationForm/>}/>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
