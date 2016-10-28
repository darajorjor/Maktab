import React from 'react'
import {connect} from 'react-redux'
import MJNavbar from './MJNavbar'

function mapStateToProps(state){
    return {
        loggedIn: state.Wrapper.loggedIn
    }
}

export default connect(mapStateToProps)(MJNavbar);