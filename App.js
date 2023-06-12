import React, { useEffect, useState } from "react";
import "./App.css"

import Recipe from "./Recipe";

const App = () => {


  const APP_ID = 'fb35123c';
  const APP_KEY = '60888e30d2c545d778788ef8ebbe8779';
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(search);
  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  useEffect
    (
      () => {
        getrecipes();
      
      },[query]);



  const getrecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);


  }

  const handleSubmit = (event) => {

    setSearch(event.target.value);
  }
  return (

    <div className="App">

      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search} onChange={handleSubmit} />
        <button
          className="search-button"
          type="submit" >Search</button>



      </form>
      {
        recipes.map(recipe => (
          <div className="recipes">
          <Recipe

            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />

            </div>
        )

         
        )

      }


    </div>
  )
}






export default App;