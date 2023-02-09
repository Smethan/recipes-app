// import MainPage from './Containers/MainPage/MainPage.jsx';
import FeatureRecipe from "./Containers/FeatureRecipe/FeatureRecipe";
import PopularRecipes from "./Containers/PopularRecipes/PopularRecipes";
import UserProfile from "./Containers/UserProfile/UserProfile";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBottom from "./Components/Nav/NavBottom";
import InfoBar from "./Components/InfoBar/InfoBar.jsx"



const App = () => {
	return (
		<Router>
			<div className="App">
				<Nav />
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
