import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [showForm, setShowForm] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCzFlHQHBCJGLHnFp5DPlxW1QCKGMCECcrQ&usqp=CAU")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br></br>
      <Paper
        elevation={3}
        style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <div>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please sign up to continue</p>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => navigate("/")}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <center>
            <p>
              Already existing user ? Please login to continue
              <nav>
                <Link to="/Loginpage">Login</Link>
              </nav>
            </p>
          </center>
        </div>
      </Paper>
      <div><br></br></div>
    </div>
  );
};
export default SignIn;