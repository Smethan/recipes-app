import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
	return (
		
		<Menu>
			<Link to="/" className="menu-item"> 
				Home
			</Link>
			<Link to="/profile" className="menu-item">
				Your Recipes
			</Link>
		</Menu>
	);
};

export default Sidebar;
