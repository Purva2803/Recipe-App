import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients})=> {
    return(
        <div  className={style.recipe} >
            <h1 >Name:{title}</h1>
            <ol> <b>Ingredients:</b>
                {
                    ingredients.map(ingredient =>
                        (
                            <li>{ingredient.text}</li>
                        ))
                }
            </ol>
            <p> <b>Cal:</b>{calories}</p>
            <img src={image} alt="" />
            

        </div>

    )
 }

  export default Recipe;