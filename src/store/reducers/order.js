import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };
        case actionsTypes.PURCHASE_BURGUER_START:
            return {
                ...state,
                loading: true
            };
        case actionsTypes.PURCHASE_BURGUER_SUCCESS:
            const order = {
                ...action.orderData,
                id: action.orderId,
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(order)
            };
        case actionsTypes.PURCHASE_BURGUER_FAILED:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}

export default reducer;