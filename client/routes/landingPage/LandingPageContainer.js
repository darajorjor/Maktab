/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import LandingPage from './LandingPage'
import {connect} from 'react-redux'
import {authenticate} from ''

class LandingPageContainer extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    componentWillMount(){
        this.props.dispatch(authenticate())
    }

    render(){
        return(
            <LandingPage />
        )
    }
}
/*
function mapStateToProps(state) {
    return {

    }
}*/

export default connect()(LandingPage)