// import MainPage from './Containers/MainPage/MainPage.jsx';
import FeatureRecipe from './Containers/FeatureRecipe/FeatureRecipe';
import PopularRecipes from './Containers/PopularRecipes/PopularRecipes';
import UserProfile from "./Containers/UserProfile/UserProfile"
import Nav from "./Components/Nav/Nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
  <Router>
    <div className="App">
      <Nav/>
      <div className="body">
        {/* <Routes> */}
          {/* <Route exact path="/"> */}
            <section>
              <FeatureRecipe/>
            </section>
            
            <section>
              <PopularRecipes/>
            </section>
          {/* </Route> */}
           {/* <Route  path="/profile">
           <UserProfile/>
          </Route> */}
        {/* </Routes>  */}
      </div>
    </div>
  </Router>
    )
}

export default App;
