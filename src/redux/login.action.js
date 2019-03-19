export function loginRequest(username, password, remember=false) {
    return {
        type: 'LOGIN_REQUEST',
        payload: {
            username,
            password,
            remember
        }
    }
}