import reducer from './auth';
import * as actionTypes from '../actions/actionsTypes';

describe('auth reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            idToken: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should store the token upon login', () => {
        const action = {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-id'
        }

        let newState = {
            ...initialState,
            idToken: 'some-token',
            userId: 'some-id',
            loading: false
        }

        expect(reducer(initialState, action)).toEqual(newState);
    });
});
