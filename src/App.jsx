// import MainPage from './Containers/MainPage/MainPage.jsx';
import FeatureRecipe from "./Containers/FeatureRecipe/FeatureRecipe";
import PopularRecipes from "./Containers/PopularRecipes/PopularRecipes";
import UserProfile from "./Containers/UserProfile/UserProfile";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBottom from "./Components/Nav/NavBottom";
import InfoBar from "./Components/InfoBar/InfoBar.jsx"
import { useState } from "react";


const App = () => {
	const [user, setUser] = useState({
		firstName: "Guy",
		lastName: "Fieri",
		email: "guyfieri@diners.drives"
	  });
	
	  const handleSubmit = event => {
		event.preventDefault();
		let firstName = event.target[0].value;
		let lastName = event.target[1].value;
		let email = event.target[2].value;
	
		if (firstName && lastName && email) {
		  event.target.reset();
		  setUser({ firstName, lastName, email });
		}
	  };

	return (
		<Router>
			<div className="App">
				<Nav userName={`${user.firstName} ${user.lastName} ${user.email}`} handleSubmit={handleSubmit} />
				<div className="body">
					<Routes>
						<Route
							element={
								<section>
									<FeatureRecipe />
									<InfoBar />
									<PopularRecipes />
								</section>
							}
							exact
							path="/"
						/>
						<Route element={<UserProfile />} path="/profile" />
					</Routes>
				</div>
				<NavBottom />
			</div>
		</Router>
	);
};

export default App;
