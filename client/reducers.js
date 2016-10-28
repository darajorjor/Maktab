import {routerReducer} from 'react-router-redux'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import MSnackbar from './common/MSnackBar/MSnackbarReducer.js'
import Wrapper from './wrapper/WrapperReducer.js'

export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    MSnackbar,
    Wrapper
});
