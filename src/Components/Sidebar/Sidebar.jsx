import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

const Sidebar = (props) => {
	return (
		<Menu>
			<a className="menu-item" href="/">
				Home
			</a>
			<a className="menu-item" href="/salads">
				Your Recipes
			</a>
		</Menu>
	);
};

export default Sidebar;
