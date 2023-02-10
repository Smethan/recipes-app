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
      <h4 className="small-link">About</h4>
      <h2>_nology Recipes</h2>
      <h4 className="small-link">All Recipes</h4>

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