import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTER_SUCCESSFUL,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from "../../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    };

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const registerUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data);
            console.log(response.data);

            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: response.data
            });

            //Get user
            userAuthenticated();

        } catch (err) {
            // console.log(err.response.data.msg);
            const alert = {
                msg: err.response.data.msg,
                category: 'alert'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        };
    };

    //Return authenticated user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            //Function to send token in headers
            tokenAuth(token);
        };
        try {
            const response = await clientAxios.get('/api/auth');
            // console.log(response);
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (err) {
            console.log(err.response);
            dispatch({
                type: LOGIN_ERROR
            });
        };
    };

    //User login
    const login = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });
            //Get user
            userAuthenticated();

        } catch (err) {
            console.log(err.response.data.msg);
            const alert = {
                msg: err.response.data.msg,
                category: 'alert'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        };
    };

    //Logout
    const logout = () => {
        dispatch({
            type: LOG_OUT
        });
    };

    return(
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                userAuthenticated,
                login,
                logout
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
