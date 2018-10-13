import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {

    /*
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = +param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }

        }

        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });
    }
    */

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        console.log(this.props.match.path + '/contact-data');
        let summary = <Redirect to="/" />;

        if(this.props.ings){
            summary = (
                <div>
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
        ings: state.ingredients
    };
}

export default connect(mapStateToProps)(Checkout);