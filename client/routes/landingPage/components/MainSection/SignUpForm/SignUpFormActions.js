/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */
import {errorHandler, requestData} from '../../../../../actions.js'
import callApi from '../../../../../util/apiCaller.js'
import {browserHistory} from 'react-router'

export function signUp() {

    return (dispatch, getState) => {

        let data = getState().form.signup.values;
        data.password = btoa(data.password);

        dispatch(requestData(data));

        callApi('users', 'post', data).then((res) => {
            dispatch(signupSuccessful(res));
            browserHistory.push('class')
        });/*
        $.ajax({
            url: '/api/users',
            method: 'POST',
            data: JSON.stringify(data),
            contentType: 'Application/json',
            success: (response) => {
                dispatch(signupSuccessful(response));
                browserHistory.push('class')
            },
            error: (error) => {
                errorHandler(dispatch, error, 'SIGNUP')
            }
        });*/
    }
}

export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export function signupSuccessful(data) {
    return {
        type:SIGNUP_SUCCESSFUL,
        data
    }
}