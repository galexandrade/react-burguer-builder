import React from 'react';
import Burguer from '../../Burguer/Burguer';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burguer ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.onCheckoutCanceled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.onCheckoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;