/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import {connect} from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import {requestClose} from './MSnackbarActions'

class MSnackbar extends React.Component {

    handleTouchTap(){
        var newWindow = window.open();
        newWindow.document.write(this.props.responseText);
    }

    render(){
        return(
            <Snackbar
                open={this.props.open}
                message={this.props.snackMessage}
                action="مشاهده"
                onActionTouchTap={this.handleTouchTap.bind(this)}
                autoHideDuration={4000}
                onRequestClose={() => this.props.requestClose()}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        open: state.MSnackbar.open,
        snackMessage: state.MSnackbar.snackMessage,
        responseText: state.MSnackbar.responseText
    }
}

export default connect(mapStateToProps,{requestClose})(MSnackbar);