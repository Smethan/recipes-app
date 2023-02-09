import "./ProfileButton.scss"
import { PopupMenu } from "react-simple-widgets";
import userIcon from "../../Images/user-icon.png";

const ProfileButton = () => {
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
        <img src={userIcon} className="profile" alt="user profile icon" width="50" height="50"   />

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span className="initial-icon">J</span>
              </div>

              <h5 className="text-center mb-0">John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

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
