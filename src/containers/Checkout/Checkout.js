import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary = <Redirect to="/" />;

        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        onCheckoutCanceled={this.checkoutCanceledHandler}
                        onCheckoutContinued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}/>
                </div>
            );
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burguerBuilder.ingredients,
        purchased: state.order.purchased,
    };
}

export default connect(mapStateToProps)(Checkout);