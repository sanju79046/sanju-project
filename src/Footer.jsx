import React from "react";
import AppBar from "@mui/material/AppBar";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#4B0082" }}>
        <p style={{ backgroundColor: "#4B0082" }}>
          <h4>
            Email:freelancefinder099@gmail.com &emsp; &emsp;Contact: 9867895748
          </h4>
          <h5>
            Help and Support &emsp;&emsp;Copy Rights @2023 Freelancer Technology
          </h5>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
         
        <FacebookIcon fontSize="large" color="primary" /><br></br>
        <InstagramIcon fontSize="large" style={{color:'deeppink'}}/>
        <YouTubeIcon fontSize="large" style={{color:'red'}} />

        </div>

      </AppBar>
    </div>
  );
};

export default Footer;