/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESSFUL,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from "../../types";

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESSFUL:
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false,
            };

        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }

        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload,
                loading: false
            };
        default:
            return state;
    };
};