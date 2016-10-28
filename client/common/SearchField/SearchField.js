import React from 'react'
import {lightGreen500, lightGreen100} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui/svg-icons/action/search'

export default class SearchField extends React.Component {

    render(){
        return(
            <div>
                <TextField
                    {...this.props}
                />
                <IconButton style={{position : 'absolute', left: 398, top: 8}}>
                    <Search color={lightGreen500} hoverColor={lightGreen100}/>
                </IconButton>
            </div>
        )
    }
}