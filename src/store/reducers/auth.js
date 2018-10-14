import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    idToken: null,
    userId: null,
    error: null,
    loading: null,
    authRedirectPath: '/'
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        idToken: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {idToken: null, userId: null});
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAILED:
            return updateObject(state, {error: action.error, loading: false});
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        default:
            return state
    }
}

export default reducer;