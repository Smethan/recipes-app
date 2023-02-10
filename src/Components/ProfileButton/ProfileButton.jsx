import "./ProfileButton.scss"
import userIcon from "../../Images/user-icon.png";
import whiteCross from "../../Images/white-cross.png";
import Button from "../../Components/Button/Button.jsx";

const ProfileButton = (props) => {
    const { userName, toggleLogin, handleSubmit } = props;
    
  return (
        <div className="login-menu">
            <div className="login-menu-content">
                <img
                src={whiteCross}
                alt="Close menu"
                className="login-menu-cross"
                onClick={toggleLogin}
            />
         <span id="nology-recipes-login">_nology Recipes</span>
         <span id="user-profile-login">User Profile</span>

        <h2 className="login-menu-title">Welcome back, {userName}</h2>
        <form className="login-menu-form" onSubmit={handleSubmit}>
        <span>_____________</span>
            <label className="first-name" htmlFor="login-box-first">First Name</label>
            <input
                type="text"
                name="firstName"
                className="login-box-first"
                placeholder="First Name"
            />
            <label className="last-name" htmlFor="login-box-last">Last Name</label>
            <input 
                type="text" 
                name="lastName" 
                className="login-box-last" 
                placeholder="Last Name"
            />

            <label className="email-input" htmlFor="login-box-email">Email Address</label>
            <input 
                className="input-box-email" 
                type="email" 
                placeholder="Email Address" 
            />
            <button className="submit-button-profile">Submit</button>
        </form>
            </div>
            </div>
            
       
        
   
  )}

export default ProfileButton;
