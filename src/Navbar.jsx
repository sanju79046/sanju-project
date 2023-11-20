// components/NavBar.js
/*import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
*/
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
//import LoginPage from "./LoginPage";
//import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <nav style={{ alignItems: "flex-start" }}>
            <Link to="/about">About</Link>
          </nav>
          &emsp;
          <Button
            onClick={() => navigate("LoginPage")}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          &emsp;
          <Button
            onClick={() => navigate("SignUp")}
            variant="contained"
            color="primary"
            type="submit"
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;