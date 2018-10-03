import React from 'react';
import { withRouter } from 'react-router-dom'

import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredint/BurguerIngredient';

const burguer = (props) => {
    console.log(props);

    //Get an array of an object
    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurguerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(ingredients.length === 0){
        ingredients = <p>Please start adding ingredients!</p>;
    }    

    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {ingredients}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burguer);