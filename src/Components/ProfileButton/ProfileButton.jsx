import "./ProfileButton.scss"
import { PopupMenu } from "react-simple-widgets";
import userIcon from "../../Images/user-icon.png";

const ProfileButton = () => {


    // Create logic for name and email submission
    // Change yellow circle to nology recipes/user profiles
    // Change font size, insert submit button
    // Create logic for logout button => resets to empty strings
    
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
        <img src={userIcon} className="profile" alt="user profile icon" width="50" height="50"   />

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div className="text-center mx-auto mb-4">
                <span id="nology-recipes-login">_nology Recipes</span>
                <span id="user-profile-login">User Profile</span>
              </div>

            <div className="input-boxes-container">
                <span>First Name</span>
                <input className="input-box" type="text" placeholder="First Name"></input>
                <span>Last Name</span>
                <input className="input-box" type="text" placeholder="Last Name"></input>
                <span>Email Address</span>
                <input className="input-box" type="email" placeholder="Email Address"></input>
             </div>

             <hr />

              <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}

export default ProfileButton;
