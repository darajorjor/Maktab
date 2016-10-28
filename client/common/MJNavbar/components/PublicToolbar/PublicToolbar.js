import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {deepPurple500, deepPurple300} from 'material-ui/styles/colors'
import {Link} from 'react-router'

export default class PublicToolbar extends React.Component {

    render(){
        return(
            <div style={{marginTop: 5}}>
                <div style={{marginLeft: 20, display: 'inline-block'}}>
                    <FlatButton
                        label="درباره ما"
                        labelStyle={{color: '#fff'}}
                    />
                    <FlatButton
                        label="تماس با ما"
                        labelStyle={{color: '#fff'}}
                    />
                </div>
                <RaisedButton
                    label="ثبت نام"
                    backgroundColor={deepPurple500}
                    labelColor="#fff"
                    style={{marginRight: 10}}
                />
                <Link to="login">
                    <RaisedButton
                        label="ورود"
                        backgroundColor={deepPurple300}
                        labelColor="#fff"
                    />
                </Link>
            </div>
        )
    }
}