import { all, call, takeLatest, put } from 'redux-saga/effects';
import { DirectoryActionTypes } from './directory.types';
import { fetchEmployeeDirectorySuccess, fetchEmployeeDirectoryFailure } from './directory.actions';

export function* fetchEmployeeDirectoryAsync(action) {
    try {
        let url = "https://arback-node.herokuapp.com/directory?";
        url += "filter=" + action.payload.filter;
        url += "&input=" + action.payload.input;
        const employeesRes = yield call(fetch, url);
        console.log(employeesRes);
        const employeesData = yield call([employeesRes, 'json']);
        yield put(fetchEmployeeDirectorySuccess(employeesData));
    } catch (error) {
        yield put(fetchEmployeeDirectoryFailure(error.message));
    }

}

export function* fetchEmployeeDirectoryStart() {
    yield takeLatest(DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_START, fetchEmployeeDirectoryAsync);
}

export function* directorySagas() {
    yield all([call(fetchEmployeeDirectoryStart)])
}