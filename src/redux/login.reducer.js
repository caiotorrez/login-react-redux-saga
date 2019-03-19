const initialState = {
    loading: false,
    loginSuccess: false,
    error: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginSuccess: true,
                loading: false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }
        default:
            return state;
    }

}