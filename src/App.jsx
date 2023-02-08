// import MainPage from './Containers/MainPage/MainPage.jsx';
import FeatureRecipe from './Containers/FeatureRecipe/FeatureRecipe';
import PopularRecipes from './Containers/PopularRecipes/PopularRecipes';
import Nav from "./Components/Nav/Nav"
import InfoBar from './Components/InfoBar/InfoBar';
import NavBottom from './Components/Nav/NavBottom';
import { BrowserRouter as Router, Route, Swithc } from 'react-router-dom';
const App = () => {
  return (
  
  <Router>
    <>
      <Nav/>
      <section>
        <FeatureRecipe/>
      </section>
      <section>
        <InfoBar />
      </section>
    <main>
      <section>
        <PopularRecipes/>
      </section>
      <NavBottom />
    </main>
    
    </>
  </Router>
    )
}

export default App;
