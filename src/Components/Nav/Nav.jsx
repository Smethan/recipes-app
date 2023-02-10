import React from "react";
import { Link } from "react-router-dom";
import { HashLink as Hash } from "react-router-hash-link";
import menuIcon from "../../Images/menu-icon.png";
import { useState } from "react";

import userIcon from "../../Images/user-icon.png";
import Sidebar from "../Sidebar/Sidebar";
import ProfileButton from "../ProfileButton/ProfileButton.jsx";
import "./Nav.scss"


const Nav = (props) => {
  const { userName, handleSubmit } = props;
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
      <Sidebar />
      <h4 className="small-link"> <Link to="/about">About</Link></h4>
      <h2>_nology Recipes</h2>
      <h4 className="small-link"> <Link to="/all-recipes">All Recipes</Link></h4>

      {showLogin && (
      <ProfileButton 
        userName={userName}
        toggleLogin={toggleLogin}
        handleSubmit={handleSubmit}
        />
      )}
      <img
      src={userIcon}
      className="profile"
      alt="profile icon"
      onClick={toggleLogin}
      />
    </div>
    </div>
  )
}
 export default Nav;


