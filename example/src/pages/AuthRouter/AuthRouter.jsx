import React from 'react';
import RouterView, { RouterWrapper, Link, next, history } from 'router-view-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';


let isAuth = false;
const routers = [
    {
        path: '/first',
        key: 'first',
        component: () => (
            <h2>
                first
                <button
                    onClick={() => {
                        isAuth = true;
                    }}
                >
                    login
                </button>
            </h2>
        ),

    },
    {
        path: '/second',
        strict: true,
        key: 'second',
        component: () => (<h2>second
            <button
                onClick={() => {
                    isAuth = false;
                    history.push("/first");
                }}
            >
                logout
            </button></h2>),
        before: () => {
            if (isAuth) {
                return next();
            }

            return next('/forbidden');
        },


    }, {
        path: '/forbidden',
        strict: true,
        key: 'second',
        component: () => (<h2>forbidden</h2>),


    },
];


function AuthRouter() {

    return (
        <RouterWrapper>
            <h1>Router with Auth</h1>
            <SyntaxHighlighter language="javascript">
                {`
let isAuth = false;
const routers = [
    {
        path: '/first',
        key: 'first',
        component: () => (
            <h2>
                first
                <button
                    onClick={() => {
                        isAuth = true;
                    }}
                >
                    login
                </button>
            </h2>
        ),

    },
    {
        path: '/second',
        strict: true,
        key: 'second',
        component: () => (<h2>second
            <button
                onClick={() => {
                    isAuth = false;
                    history.push("/first");
                }}
            >
                logout
            </button></h2>),
        before: () => {
            if (isAuth) {
                return next();
            }

            return next('/forbidden');
        },


    }, {
        path: '/forbidden',
        strict: true,
        key: 'second',
        component: () => (<h2>forbidden</h2>),


    },
];


                `}
            </SyntaxHighlighter>

            <Link to="/first">first page</Link>
            <Link to="/second"> second page </Link>
            <div>
                <RouterView routers={routers} />
            </div>
        </RouterWrapper>
    );
}

export default AuthRouter;
