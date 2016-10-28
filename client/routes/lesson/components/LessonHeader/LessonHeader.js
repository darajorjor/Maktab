import React from 'react'
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {red500} from 'material-ui/styles/colors'
import style from './LessonHeader.css'
import {Link} from 'react-router'
import IconMenu from 'material-ui/IconMenu'
import NotesAndTips from '../../../../common/NotesAndTips/NotesAndTips.js'
import LinearProgress from 'material-ui/LinearProgress'
import {deepOrange500} from 'material-ui/styles/colors'

export default class LessonHeader extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>
                    <div className={style.tips}>
                        <IconMenu
                            iconButtonElement={<FlatButton
                                label="نکات و یادداشت ها"
                                labelPosition="before"
                                secondary
                                icon={<LightBulb />}
                            />}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                        >
                            <NotesAndTips />
                        </IconMenu>
                    </div>
                    <h3 style={{textAlign: 'center', marginTop: 2}}>ماهیچه های پشتی</h3>
                    <div className={style.exit}>
                        <Link to="section">
                            <RaisedButton
                                label="فعلا بیخیال"
                                labelPosition="before"
                                labelColor="#fff"
                                backgroundColor={red500}
                                icon={<ExitToApp />}
                            />
                        </Link>
                    </div>
                </div>
                <div>
                    <LinearProgress
                        mode="determinate"
                        value={50}
                        color={deepOrange500}
                        style={{height: 8}}
                    />
                </div>
            </div>
        )
    }
}