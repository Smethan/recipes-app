import React from 'react'
import menuIcon from "../../Images/menu-icon.png";
import userIcon from "../../Images/user-icon.png";

const Nav = () => {
  return (
    <div>
      <img src={menuIcon} alt="menu icon"  />
      <h2>_nology Recipes</h2>
      <img src={userIcon} alt="user profile icon" width="75" height="75"   />

    </div>
  )
}

export default Nav