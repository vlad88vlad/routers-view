import React from 'react';
import { createBrowserHistory } from 'history';
import {
    Redirect,
    Route,
    Router,
    Switch,
    HashRouter,
    Link,
    BrowserRouter
} from 'react-router-dom';

const history = createBrowserHistory();

const renderComponent = (route, props, extraProps) => (
    <route.component {...props} {...extraProps} route={route} />

);

const RouterType = ({ type, children, ...routerProps }) => {
    if (type === "hash") {
        return (
            <HashRouter {...routerProps} history={history}>
                {children}
            </HashRouter>
        );
    }
    return (
        <Router {...routerProps} history={history}>
            {children}
        </Router>
    );
};
const RouterWrapper = ({ routerType = '', children, ...props }) => {

    return (
        <BrowserRouter>
            <RouterType {...props} type={routerType}>
                {children}
            </RouterType>
        </BrowserRouter>

    );
};

const next = (path) => (
    path || true
);

const RenderRoutes = ({ routers }, { extraProps = {} }) => {
    if (!routers) {
        console.error('routers is required');
        return null;
    }
    if (!Array.isArray(routers)) {
        console.error('routers should be array');
        return null;
    }
    if (routers.length === 0) {
        console.warn('routers length = 0');
    }

    if (routers && Array.isArray(routers)) {
        return (

            <Switch>

                {routers.map((route, i) => (
                    <Route
                        key={route.key || i}
                        path={route.path}
                        exact={route.exact || false}
                        strict={route.strict || false}
                        render={(props) => {
                            const { before } = route;

                            if (route.hasOwnProperty('before')
                                && typeof before === 'function') {
                                const result = before();

                                if (typeof result === 'string') {
                                    return <Redirect to={result} />;
                                }

                                return renderComponent(route, props, extraProps);
                            }

                            return renderComponent(route, props, extraProps);
                        }}
                    />
                ))}
            </Switch>

        );
    }
    return null;
};


export { Link, history, RouterWrapper, next };

export default RenderRoutes;