/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */
import {SIGNUP_SUCCESSFUL} from '../routes/landingPage/components/MainSection/SignUpForm/SignUpFormActions.js'
import {AUTH_SUCCESS, AUTH_FAIL} from '../actions.js'

export default function Wrapper(state = {
    loggedIn: false
}, action){
    switch(action.type){
        case SIGNUP_SUCCESSFUL:
            return Object.assign({},state, {
                loggedIn: true
            });
        case AUTH_SUCCESS:
            return Object.assign({},state, {
                loggedIn: true
            });
        case AUTH_FAIL:
            return Object.assign({},state, {
                loggedIn: false
            });
        default:
            return state;
    }
}