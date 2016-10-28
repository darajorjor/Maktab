import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router'
import style from './Login.css'
import Paper from 'material-ui/Paper'
import {Field, reduxForm} from 'redux-form'
import {renderTextField} from '../../common/MuiWrapper/MuiWrapper.js'

class Login extends React.Component {

    render(){
        return(
            <div className="container">
                <h2 style={{textAlign : 'center', color: '#000', fontWeight: 300}}>ورود به کلاس من</h2>
                <Paper className={style.paper}>
                    <Field
                        name="username"
                        label="نام کاربری"
                        component={renderTextField}
                    />
                    <Field
                        name="password"
                        label="کلمه عبور"
                        type="password"
                        component={renderTextField}
                    />
                    <br/>
                    <br/>
                    <Link to="/" style={{fontSize: 14}}>کلمه عبورتو فراموش کردی ؟</Link>
                    <br/>
                    <br/>
                    <Link to="/">
                        <RaisedButton
                            label="ورود"
                            fullWidth
                            primary
                            onTouchTap={() => this.props.authenticate()}
                        />
                    </Link>
                </Paper>
            </div>
        )
    }
}

export default reduxForm({
    form: 'login'
})(Login)