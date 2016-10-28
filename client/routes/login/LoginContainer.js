/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import Login from './Login.js'
import {authenticate} from '../../actions.js'
import {connect} from 'react-redux'

class LoginContainer extends React.Component {

    render(){
        return(
            <Login />
        )
    }
}

export default connect(null, {authenticate})(Login)