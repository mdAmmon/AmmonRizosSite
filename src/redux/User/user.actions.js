import { UserActionTypes } from './user.types';

export const startLogin = credentials => ({
    type: UserActionTypes.LOGIN_START,
    payload: credentials
})

export const loginSuccessSetUser = user => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFail = error => ({
    type: UserActionTypes.LOGIN_FAILURE,
    payload: error
})

export const logout = () => ({
    type: UserActionTypes.LOGOUT,
})

export const unsetLoginError = () => ({
    type: UserActionTypes.UNSET_LOGIN_ERROR,
})