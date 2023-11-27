import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import About from "./About";
import SignUp from "./SignUp";
import LoginPage from "./LoginPage";
import FindWork from "./FindWork";
import Freelancing from "./Freelancing";
import ForYou from "./ForYou";
import Footer from "./Footer";
import { AuthProvider } from "./AuthContext";
import Photography from "./Photography";
import Catering from "./Catering";
import Artwork from "./Artwork";
import Webdesign from "./Webdesign";
import Makeup from "./Makeup";
import CakeBaking from "./CakeBaking";
import Webtechnology from "./Webtechnology";
import DigitalMarketing from "./DigitalMarketing";
import ContentWriter from "./ContentWriter";
import LogoDesign from "./LogoDesign";


const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LoginPage" element={<LoginPage />} />
          
          <Route path="findfreelancer" element={<FindWork />} />
        <Route path="findfreelancer/photography" element={<Photography />} />
        <Route path="findfreelancer/catering" element={<Catering />} />
        <Route path="findfreelancer/webdesign" element={<Webdesign />} />
        <Route path="findfreelancer/artwork" element={<Artwork />} />
        <Route path="findfreelancer/makeup" element={<Makeup />} />
        <Route path="findfreelancer/cakebaking" element={<CakeBaking/>} />
        <Route path="findfreelancer/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="findfreelancer/webtechnology" element={<Webtechnology/>} />
        <Route path="findfreelancer/contentwriter" element={<ContentWriter/>} />
        <Route path="findfreelancer/logodesign" element={<LogoDesign/>} />

          <Route path="freelancing" element={<Freelancing />} />
          <Route path="foryou" element={<ForYou />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;