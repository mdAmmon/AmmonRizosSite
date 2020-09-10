import { all, call } from 'redux-saga/effects';

import { directorySagas } from './Directory/directory.sagas';

export default function* rootSaga() {
    yield null; 
    yield all([
        call(directorySagas),
    ]);
}