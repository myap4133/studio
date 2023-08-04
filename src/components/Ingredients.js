import styles from './Ingredients.module.css';

const RecipeIngredients = () => {
    let ingredients = ["2 lemon, zested", "1 1/2 cups buttermilk", "4 eggs", "3 teaspoons vanilla extract", "1/2 teaspoon almond extract"];
    return(
    <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
    </div>);
};

export default RecipeIngredients;