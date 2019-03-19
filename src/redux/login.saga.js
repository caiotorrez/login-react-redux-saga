
import { put, delay } from 'redux-saga/effects';

export function* asyncloginRequest(action) {
 
    try {
        if ((action.payload.username && action.payload.password)  === 'admin') {
            yield delay(2000)
            yield put({
                type: 'LOGIN_SUCCESS'
            })
        } else {
            throw new Error('Usuário ou Senha inválido')
        }
    } catch(err) {
        yield delay(2000)
        yield put({
            type: 'LOGIN_ERROR',
            payload: {
                error: err.message
            }
        })
    }
}