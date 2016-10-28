/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import {REQUEST_CLOSE} from './MSnackbarActions'
import { ERROR_RECEIVED, AUTH_FAIL } from '../../actions.js'
import {SIGNUP_SUCCESSFUL} from '../../routes/landingPage/components/MainSection/SignUpForm/SignUpFormActions.js'

export default function MSnackbar(state = {
    snackMessage: '',
    open: false,
    responseText: ''
}, action){
    switch(action.type){
        case REQUEST_CLOSE:
            return Object.assign({}, state, {
                open: false
            });
        case ERROR_RECEIVED:
            return Object.assign({}, state, {
                snackMessage: `Error ${action.data.status} from ${action.source}`,
                open: true,
                responseText: action.data.responseText
            });
        case SIGNUP_SUCCESSFUL:
            return Object.assign({}, state, {
                snackMessage: `${action.data.user.username} خوش اومدی`,
                open: true,
                responseText: action.data.responseText
            });
        case AUTH_FAIL:
            return Object.assign({}, state, {
                snackMessage: action.data,
                open: true,
                responseText: null
            });
        default:
            return state;
    }
}