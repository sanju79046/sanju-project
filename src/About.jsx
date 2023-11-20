import React from "react";
import { Link } from "react-router-dom";
//import SideImageComponent from "./SideImageComponent";
//import { Typography } from "@mui/material";
const About = () => {
  return (
    <div>
        <div>
      <nav>
        <Link to="/">
          <b>Back to HomePage</b>
        </Link>
      </nav>
      </div>

      <div className="about-container">
        <center>
      <h2 className="about-contents">About Us</h2>
      <p>
        Welcome to our Freelance Finder App, where we connect skilled freelancers with clients
        looking for their expertise. With over 1000 successful projects completed, we take pride
        in being a hub for freelance talent and job opportunities.
      </p>
      <p>
        Our platform is designed to make the freelance hiring process seamless. Whether you are
        a freelancer looking for exciting projects or a client in need of top-notch talent,
        Freelance Finder App is the place to be.
      </p></center><center>
      <img className='about-image-1'src='https://png.pngtree.com/thumb_back/fw800/background/20221129/pngtree-a-corporate-professional-delivers-a-presentation-on-a-fresh-project-photo-image_42450432.jpg' alt=""></img>
      </center>
      <h3 className="about-contents">Why Choose Freelance Finder App?</h3>
      <ul>
        <li>Access to a diverse pool of talented freelancers.</li>
        <li>Streamlined project management tools for efficient collaboration.</li>
        <li>Secure and transparent payment system.</li>
        <li>Personalized profiles to showcase your skills or find the perfect match.</li>
        <li>Over 1000 projects completed successfully and counting.</li>
      </ul>
      <p className="about-contents">
        Join us on this journey of connecting talent with opportunity. Whether you're a freelancer
        looking for your next challenge or a client seeking exceptional skills, Freelance Finder App
        is here to make it happen.
      </p>
      
    </div>

    </div>
  );
};

export default About;