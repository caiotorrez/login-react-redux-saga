import {
    put,
    delay,
    call
} from 'redux-saga/effects';

function getApi(request) {
    if ((request.username && request.password) === 'admin') {
        return true;
    } else {
        throw new Error('Usuário ou Senha inválido')
    }
}



export function* asyncloginRequest(action) {

    try {
        yield delay(1000)
        yield call(getApi, {
            username: action.payload.username,
            password: action.payload.password
        })
        yield put({
            type: 'LOGIN_SUCCESS'
        })
    } catch (err) {
        yield delay(1000)
        yield put({
            type: 'LOGIN_ERROR',
            payload: {
                error: err.message
            }
        })
    }
}