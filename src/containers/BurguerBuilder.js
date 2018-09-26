import React, { Component } from 'react';
import Wrapper from '../hoc/Wrapper';
import Burguer from '../components/Burguer/Burguer';
import BuildControls from '../components/Burguer/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            cheese: 0,
            meat: 1
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }

    removeIngredientHandler = (type) => {
        
    }

    render(){
        return (
            <Wrapper>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}/>
            </Wrapper>
        );
    }
}

export default BurguerBuilder;