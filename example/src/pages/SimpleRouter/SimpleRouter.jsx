import React from 'react';
import RouterView, { RouterWrapper, Link } from 'router-view-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';


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
        component: () => (<h2>second</h2>),


    },
];


function SimpleRouter() {

    return (
        <RouterWrapper>
            <h1> Simple Router</h1>
            <SyntaxHighlighter language="javascript">
                {`
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
        component: () => (<h2>second</h2>),


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

export default SimpleRouter;
