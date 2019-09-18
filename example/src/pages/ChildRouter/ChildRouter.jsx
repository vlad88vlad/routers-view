import React from 'react';
import RouterView, { RouterWrapper, Link, history } from 'router-view-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import SubPage from "../SubPage";


const routers = [
    {
        path: '/first',
        key: 'first',
        component: () => (<h2>first</h2>),

    },
    {
        path: '/second',
        strict: true,
        key: 'second',
        component: (props) => {
            const { route: { routers } } = props;
            return (
                <div>
                    <h2>second</h2>
                    <Link to="/second/sub"> second page </Link>

                    <RouterView routers={routers} />
                </div>
            );
        },
        routers: [
            {
                key: 'second-sub',
                path: '/second/sub',
                exact: true,
                component: () => (<h2>second sub page</h2>),
            }
        ],


    },
];


function ChildRouter() {

    return (
        <RouterWrapper>
            <h1>Router with children</h1>
            <SyntaxHighlighter language="javascript">
                {`
routers = [
    {
        path: '/first',
        key: 'first',
        component: () => (<h2>first</h2>),

    },
    {
        path: '/second',
        strict: true,
        key: 'second',
        component: (props) => {
            const { route: { routers } } = props;
            return (
                <div>
                    <h2>second</h2>
                    <Link to="/second/sub"> second page </Link>

                    <RouterView routers={routers} />
                </div>
            );
        },
        routers: [
            {
                key: 'second-sub',
                path: '/second/sub',
                exact: true,
                component: () => (<h2>second sub page</h2>),
            }
        ],


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

export default ChildRouter;
