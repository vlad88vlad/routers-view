import React from 'react';

import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import SubPage from '../pages/SubPage';

const routers = [
    {
        path: '/first',
        key: 'first',
        component: FirstPage,

    },
    {
        path: '/second',
        strict: true,
        key: 'second',
        component: SecondPage,
        routes: [
            {
                key: 'second-sub',
                path: '/second/sub',
                exact: true,
                component: SubPage,
            }
        ],

    },
    {
        key: 'not-found',
        path: '*',
        component: () => (<h1>not found</h1>),

    },
];


export default routers;
