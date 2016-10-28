import React from 'react'
import AppBar from 'material-ui/AppBar'
import SearchField from '../SearchField/SearchField.js'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import UserToolbar from './components/UserToolbar/UserToolbar'
import PublicToolbar from './components/PublicToolbar/PublicToolbar'
/**
 * svg icons
 * */

import {lightGreen100, lightGreen500} from 'material-ui/styles/colors'

const style = {
    icon: {
        position: 'absolute',
        right: 100,
        top: 8,
        width: 50
    }
};

export default class MJNavbar extends React.Component {

    render(){
        return(
            <AppBar
                title={<Link style={{color: '#fff'}} to="#">مکتب</Link>}
                zDepth={2}
                style={{position: 'relative'}}
                iconElementRight={ this.props.loggedIn ? <UserToolbar /> : <PublicToolbar />}
                showMenuIconButton={false}
            >
                <img style={style.icon} src="img/premium_new_512x512.png" alt=""/>
                <SearchField
                    hintText="جستجو"
                    underlineShow={false}
                    hintStyle={{color: lightGreen100, zIndex: 99, paddingLeft: 10}}
                    inputStyle={{backgroundColor: '#fff', color: lightGreen500, borderRadius: 4, paddingLeft: 10}}
                    style={{position: 'absolute', left: 180, top: 8}}
                />
                <div style={{position: 'absolute', right: 480, top: 14}}>
                    <RaisedButton secondary label="کلاس ها"/>
                </div>
            </AppBar>
        )
    }
}