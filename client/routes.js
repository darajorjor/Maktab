/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from './App';
/**
 * routes
 * */
import LandingPage from './routes/landingPage/LandingPage.js'
import Class from './routes/class/Class.js'
import Section from './routes/section/Section.js'
import Lesson from './routes/lesson/Lesson.js'
import Login from './routes/login/LoginContainer.js'
import Wrapper from './wrapper/Wrapper';
import NotFoundPage from './routes/notFound/NotFoundPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
    require.ensure = function requireModule(deps, callback) {
        callback(require);
    };
}

/* Workaround for async react routes to work with react-hot-reloader till
 https://github.com/reactjs/react-router/issues/2182 and
 https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
    // Require async routes only in development for react-hot-reloader to work.
    // require('./modules/Post/pages/PostListPage/PostListPage');
    // require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
    <Route path="/" component={Wrapper}>
        <IndexRoute
            component={LandingPage}
        />
        <Route
            path="class"
            component={Class}
        />
        <Route
            path="section"
            component={Section}
        />
        <Route
            path="lesson"
            component={Lesson}
        />
        <Route
            path="login"
            component={Login}
        />
        <Route
            path="*"
            component={NotFoundPage}
        />
    </Route>
);
