import { all, call, takeLatest, put, take } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { loginSuccessSetUser, loginFail } from './user.actions';

export function* loginAsync(action) {
    try {
        const loginRes = yield call(fetch, 'https://arback-node.herokuapp.com/session/login', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(action.payload)
        })

        const userData = yield call([loginRes, 'json']);

        if(!userData.length) yield put(loginFail("Unable to login."));
        else {
            localStorage.setItem("username", userData);
            yield put(loginSuccessSetUser({name: userData}));
        }

    } catch (error) {
        yield put(loginFail(error.message));
    }
}

export function* logoutOp() {
    yield localStorage.removeItem('username');
}

export function* logout(){
    yield takeLatest(UserActionTypes.LOGOUT, logoutOp)
}

export function* login() {
    yield takeLatest(UserActionTypes.LOGIN_START, loginAsync);
}

export function* userSagas() {
    yield all([call(login), call(logout)])
}