import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const onPurchaseSuccess = (state, action) => {
    const order = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(order)
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});
        case actionsTypes.PURCHASE_BURGUER_START:
            return updateObject(state, {loading: true});
        case actionsTypes.PURCHASE_BURGUER_SUCCESS:
            return onPurchaseSuccess(state, action);
        case actionsTypes.PURCHASE_BURGUER_FAILED:
            return updateObject(state, {loading: false});
        case actionsTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
        case actionsTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                orders: action.orders,
                loading: false
            });
        case actionsTypes.FETCH_ORDERS_FAILED:
            return updateObject(state, {loading: false});
        default:
            return state;
    }
}

export default reducer;