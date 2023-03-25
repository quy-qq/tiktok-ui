import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGIN_REUQUEST } from '../actions/type';

const initialState = {
    isLogin: false,
    userInfo: undefined,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
            };
        case REGISTER_FAIL:
            return {
                ...state,
            };
        case LOGIN_REUQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return { ...state, isLogin: true, userInfo: payload };
        case LOGIN_FAIL:
            return { ...state };
        case LOGOUT:
            return { ...state, token: null, user: null };
        default:
            return state;
    }
};

export default authReducer;
