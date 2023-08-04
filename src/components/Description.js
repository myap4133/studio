import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorLink=`https://www.facebook.com/marybMCC3/`;
    let authorPhoto=`data:image/jpeg;base64,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`;
    let authorName="Mary Berg";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Facebook Page</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component{
    render(){
        return(    
        <div> 
            <div>
                <h1>Strawberry Lemon Crepe Cake</h1>
                <p>A crepe cake with lemon curd filling and topped with strawberries and whipped cream</p>
            </div>
            <RecipeAuthor />
        </div>);
    }
}

export default RecipeDescription;