import React from 'react'
import Person from 'material-ui/svg-icons/social/person'
import Add from 'material-ui/svg-icons/content/add'
import Notifications from 'material-ui/svg-icons/social/notifications'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import style from './UserToolbar.css'
import {lightGreen100} from 'material-ui/styles/colors'

export default class UserToolbar extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <IconMenu
                    iconButtonElement={
                        <IconButton>
                            <Badge
                                badgeContent={3}
                                secondary
                                className={style.badge}
                                badgeStyle={{right: 20,top: -12}}
                            >
                                <Notifications color="white" hoverColor={lightGreen100}/>
                            </Badge>
                        </IconButton>
                    }
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <div>
                        <h1 style={{marginTop: 10}}>Notifications</h1>
                        <p>Eleatess velum in rugensis civitas!</p>
                        <p>Eleatess velum in rugensis civitas!</p>
                        <p>Eleatess velum in rugensis civitas!</p>
                        <p>Eleatess velum in rugensis civitas!</p>
                    </div>
                </IconMenu>
                <IconMenu
                    iconButtonElement={
                        <IconButton>
                            <Add color="white" hoverColor={lightGreen100}/>
                        </IconButton>
                    }
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="سلام"/>
                    <MenuItem primaryText="سلام"/>
                    <MenuItem primaryText="سلام"/>
                    <MenuItem primaryText="سلام"/>
                </IconMenu>
                <IconButton>
                    <Person color="white" hoverColor={lightGreen100}/>
                </IconButton>
            </div>
        )
    }
}