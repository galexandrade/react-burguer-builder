import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component{
    componentDidMount(){
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render(){
        let orders = <Spinner/>;

        if(!this.props.loading){
            orders = (
                <div>
                    {this.props.orders.map(order => (
                        <Order
                            key={order.id}
                            lala
                            ingredients={order.ingredients}
                            price={+order.price}/>
                    ))}
                </div>
            );
        }

        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.idToken,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));