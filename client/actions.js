/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import callAuth from './util/authCaller.js'
import $ from 'jquery'

export const REQUEST_DATA = 'REQUEST_DATA';
export function requestData(data) {
    return {
        type: REQUEST_DATA,
        data
    }
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
function authenticationSuccess(data) {

    $.cookie("access_token", data.token);

    return {
        type: AUTH_SUCCESS,
        data: data.message
    }
}

export const AUTH_FAIL = 'AUTH_FAIL';
function authenticationFail(data) {

    $.removeCookie("access_token");

    return {
        type: AUTH_FAIL,
        data
    }
}

export function authenticate() {
    return (dispatch, getState) => {

        let data = getState().form.login.values;

        callAuth("authenticate", 'post', data).then((res) => res.success ? dispatch(authenticationSuccess(res)) : dispatch(authenticationFail(res.message)));
    }
}

export const ERROR_RECEIVED = 'ERROR_RECEIVED';
export function errorHandler(dispatch, error, source) {
    let errorMessage = '';

    console.log(error.data);
    /*
     if(error.data.error) {
     errorMessage = error.data.error;
     } else if(error.data){
     errorMessage = error.data;
     } else {
     errorMessage = error;
     }*/

    if (error.status === 401) {
        dispatch({
            type: ERROR_RECEIVED,
            data: error,
            source
        });
        // logoutUser();
    } else {
        dispatch({
            type: ERROR_RECEIVED,
            data: error,
            source
        });
    }
}