import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] Will update');
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Wrapper>
                <h3>Your order</h3>
                <p>A delicious burguer with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    clicked={this.props.canceled}
                    btnType='Danger'>CANCEL</Button>
                <Button
                    clicked={this.props.canceled}
                    btnType='Success'>CONTINUE</Button>
            </Wrapper>
        );
    }
};

export default OrderSummary;