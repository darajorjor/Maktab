import 'babel-polyfill'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
// import store from './store'
import {Provider} from 'react-redux'
import {
    lightGreen500, lightGreen700,
    deepOrange500,
    grey100, grey400, grey500,
} from 'material-ui/styles/colors'
import Transition from 'react-addons-css-transition-group'
import Helmet from 'react-helmet'

import routes from './routes'

/**
 * custom material-ui theme
 * */
const muiTheme = getMuiTheme({
    fontFamily: "'IRANSans', serif ,sans-serif",
    isRtl: true,
    palette : {
        primary1Color: lightGreen500,
        primary2Color: lightGreen700,
        primary3Color: grey400,
        accent1Color: deepOrange500,
        accent2Color: grey100,
        accent3Color: grey500,
    }
});

const App = (props) => {
    return (
        <Provider store={props.store}>
            <div>
                <Helmet
                    title="مکتب | دانشگاه مجازی ایرانیان"
                    //titleTemplate="%s - Blog App"
                    meta={[
                        { charset: 'utf-8' },
                        {
                            'http-equiv': 'X-UA-Compatible',
                            content: 'IE=edge',
                        },
                        {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1',
                        },
                    ]}
                />
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Transition
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        <Router history={syncHistoryWithStore(browserHistory, props.store)}>
                            {routes}
                        </Router>
                    </Transition>
                </MuiThemeProvider>

            </div>
        </Provider>
    )
};



export default App;