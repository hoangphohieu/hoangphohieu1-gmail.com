// file này để combine các sagas lại 

import { all } from 'redux-saga/effects';

import { HomeSaga } from './HomeSaga';


function* rootsaga() {
    yield all([...HomeSaga,])
}
export default rootsaga;