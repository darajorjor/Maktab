import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {deepPurple500} from 'material-ui/styles/colors'
import {renderTextField} from '../../../../../common/MuiWrapper/MuiWrapper.js'
import {Field, reduxForm} from 'redux-form'
import {signUp} from './SignUpFormActions'

class SignUpForm extends React.Component {

    render(){
        return(
            <div>
                <Field
                    name="username"
                    label="نام کاربری"
                    component={renderTextField}
                    inputStyle={{color: "#fff"}}
                    hintStyle={{color: 'rgba(255,255,255, 0.7)'}}
                    floatingLabelStyle={{color: '#fff'}}
                />
                <Field
                    name="email"
                    label="ایمیل"
                    component={renderTextField}
                    inputStyle={{color: "#fff"}}
                    hintStyle={{color: 'rgba(255,255,255, 0.7)'}}
                    floatingLabelStyle={{color: '#fff'}}
                />
                <Field
                    name="password"
                    label="کلمه عبور"
                    component={renderTextField}
                    inputStyle={{color: "#fff"}}
                    hintStyle={{color: 'rgba(255,255,255, 0.7)'}}
                    type="password"
                    floatingLabelStyle={{color: '#fff'}}
                />
                <p className="text-small muted">حداقل یه کاراکتر و یک عدد و 7 حرف داشته باشه.</p>
                <RaisedButton
                    label="ثبت نام در کلاس من"
                    labelColor="#fff"
                    backgroundColor={deepPurple500}
                    fullWidth
                    onTouchTap={() => this.props.dispatch(signUp())}
                />
                <p className="text-small muted">با کلیک کردن بر روی "ثبت نام در کلاس من" شما</p>
            </div>
        )
    }
}

export default reduxForm({
    form: 'signup'
})(SignUpForm)