import React from 'react'
import { Link } from 'react-router-dom';
import menuIcon from "../../Images/menu-icon.png";
import userIcon from "../../Images/user-icon.png";

const Nav = () => {
  return (
    //Create Link for user icon image
    <div>
      <img src={menuIcon} alt="menu icon"  />
      <h2>_nology Recipes</h2>
      <Link to="/profile"> <img src={userIcon} alt="user profile icon" width="75" height="75"   /> </Link>

    </div>
  )
}

export default Nav