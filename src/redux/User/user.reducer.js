import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: {},
    isLoggingIn: false,
    loginError: undefined
}
const userReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_START:
            return ({ ...state, isLoggingIn: true, loginError: undefined })
        case UserActionTypes.LOGIN_SUCCESS:
            return ({ ...state, currentUser: action.payload, isLoggingIn: false, loginError: undefined })
        case UserActionTypes.LOGIN_FAILURE:
            return ({ ...state, isLoggingIn: false, loginError: action.payload });
        case UserActionTypes.LOGOUT:
            return { ...state, currentUser: {} }
        case UserActionTypes.UNSET_LOGIN_ERROR:
            return {...state, loginError: undefined}
        default: return state;
    }
}

export default userReducer;