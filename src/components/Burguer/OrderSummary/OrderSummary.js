import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
.map(igKey => {
    return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                clicked={props.canceled}
                btnType='Danger'>CANCEL</Button>
            <Button
                clicked={props.canceled}
                btnType='Success'>CONTINUE</Button>
        </Wrapper>
    );
};

export default orderSummary;