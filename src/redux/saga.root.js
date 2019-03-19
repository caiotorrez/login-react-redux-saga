import { takeLatest } from 'redux-saga/effects';
import {asyncloginRequest} from './login.saga';



export function* root() {
    yield takeLatest('LOGIN_REQUEST', asyncloginRequest);
}