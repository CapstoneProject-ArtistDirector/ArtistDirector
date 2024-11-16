import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/common/LoginForm";
import SignupFormDirector from "./components/CastingDirector/SignupFormDirector";
import SignupFormArtist from "./components/Artist/SignupFormArtist";
import LandingPage from "./components/LandingPage";
import RegistrationForm from "./components/CastingDirector/RegistrationForm";
import ArtistPage from "./components/Artist/ArtistPage";
import ArtistNavbar from "./components/Artist/ArtistNavbar";
import DirectorPage from "./components/CastingDirector/DirectorPage";
import DirectorNavbar from "./components/CastingDirector/DirectorNavbar";
import ArtistProfileDashboard from "./components/Artist/ArtistProfileDashboard";
import TalentPosts from "./components/TalentPost/TalentPosts";
import AppliedPosts from "./components/TalentPost/AppliedPosts";
import CastingForm from "./components/CastingDirector/CastingForm";
import DirectorHome from "./components/CastingDirector/DirectorHome";
import DirectorDashboard from "./components/CastingDirector/DirectorDashboard";
import ReactDOM from "react-dom";
import ArtistRegister from "./components/Artist/ArtistRegister.jsx";
import DirectorDash from "./components/CastingDirector/DirectorDash.jsx";
import PostDetails from "./components/CastingDirector/PostDetails.jsx";
import HomePage from "./components/HomePage.jsx";
import SampleDashboard from "./components/CastingDirector/SampleDashboard.jsx";
import ShortlistedApplicants from "./components/ShortlistedApplicants.jsx";
import DashboardDirector from "./components/CastingDirector/DashboardDirector.jsx";
import ListApplicants from "./components/CastingDirector/ListApplicants.jsx";
import SidebarEx from "./components/SidebarEx.jsx";
import RegisterArtist from "./components/Artist/RegisterArtist.jsx";
import DirectorHomePage from "./components/DirectorHomePage.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import Footer1 from "./components/Footer1.jsx";


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar />
   <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer1></Footer1>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup-artist" element={<SignupFormArtist/>}/>
          <Route path="/signup-director" element={<SignupFormDirector/>}/>
          <Route path="/artist-page" element={<ArtistPage/>}/>
          <Route path="/artist-navbar" element={<ArtistNavbar/>}/>
          <Route path="/director-page" element={<DirectorHomePage/>}/>
          <Route path="/director-navbar" element={<DirectorNavbar/>}/>
          <Route path="/register-artist" element={<RegisterArtist/>}/>
          <Route path="/register-director" element={<RegistrationForm/>}/>
        </Routes>
        <Footer></Footer>
    </BrowserRouter> */}
      {/* <ArtistProfileDashboard></ArtistProfileDashboard> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<TalentPosts />} />
        <Route path="/profile" element={<ArtistProfileDashboard />} />
        <Route path="/applied-posts" element={<AppliedPosts />} />
        <Route path="/home-page" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter> */}
      {/* <TalentPosts></TalentPosts> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<DirectorHome />} />
        <Route path="/profile" element={<ArtistProfileDashboard />} />
        <Route path="/applied-posts" element={<AppliedPosts />} />
        <Route path="/director" element={<DirectorHome />} />
        <Route path="/director/dashboard" element={<DirectorDashboard />} />
        <Route path="/add-talent-post" element={<CastingForm/>}/>
      </Routes>
    </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<DirectorHome />} />
        <Route path="/director/dashboard" element={<DirectorDash/>} />
        <Route path="/add-talent-post" element={<CastingForm />} />
        <Route path="/post-details" element={<PostDetails/>} />
        <Route path='/view-shortlisted' element={<ShortlistedApplicants/>}/>
      </Routes>
    </BrowserRouter>  */}
      {/* <SampleDashboard></SampleDashboard> */}
      {/* <SidebarEx></SidebarEx> */}
      {/* <HomePage></HomePage> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardDirector />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/applicants" element={<ListApplicants />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
