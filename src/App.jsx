// import MainPage from './Containers/MainPage/MainPage.jsx';
import FeatureRecipe from './Containers/FeatureRecipe/FeatureRecipe';
import PopularRecipes from './Containers/PopularRecipes/PopularRecipes';
const App = () => {
  return (
  <>
    <section>
      <FeatureRecipe/>
    </section>

    <section>
      <PopularRecipes/>
    </section>
  </>
 
    )
}

export default App;
