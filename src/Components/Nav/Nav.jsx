import React from "react";
import { Link } from "react-router-dom";
import { HashLink as Hash } from "react-router-hash-link";
import menuIcon from "../../Images/menu-icon.png";
import userIcon from "../../Images/user-icon.png";
import Sidebar from "../Sidebar/Sidebar";
import "./Nav.scss";

const Nav = () => {
	return (
		<div className="navbar-container">
			<div className="navbar">
				<img src={menuIcon} className="ham" alt="menu icon" width="40" height="40" />
				<h4 className="small-link">About</h4>
				<h2>_nology Recipes</h2>
				<h4 className="small-link"> 
					<Link to="/all-recipes">
						All Recipes
					</Link>
				</h4>
				<img src={userIcon} className="profile" alt="user profile icon" width="50" height="50" />
			</div>
		</div>
	);
};

export default Nav;
