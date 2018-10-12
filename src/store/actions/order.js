import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const purchaseBurguerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGUER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurguerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGUER_FAILED,
        error: error
    }
}

export const purchaseBurguerStart = (orderData) => {
    return dispatch => {
        axios.post('orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurguerSuccess(response.data, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurguerFailed(error));
            });
    }
}