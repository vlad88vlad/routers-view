import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { RouterWrapper } from "router-view-dom";


function GetInstall(props) {
    console.log(props);
    return (
        <div>
            <h1>Getting Started</h1>
            <p>Router View Dom is wrapper on simple react-router-dom providing a good development with routing for
                programmers.
            </p>
            <pre>npm install router-view-dom --save</pre>

            <div>
                <SyntaxHighlighter language="javascript">
                    {`
import React from 'react';
import RouterView, { RouterWrapper, Link } from 'router-view-dom';




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



function App(props) {

    return (
        <div className="App">
                <RouterWrapper>
                    <Link to="/first">first page</Link>
                    <Link to="/second"> second page </Link>
                     <div>
                         <RouterView routers={routers} />
                    </div>
                
                </RouterWrapper>
        </div>
    );
}

export default App;


                `}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default GetInstall;
