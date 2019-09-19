import React from 'react';
import RouterView, { RouterWrapper, Link, history } from 'router-view-dom';
import './App.css';
import 'antd/dist/antd.css';

import routers from './router';

console.log(routers);

function App(props) {
    console.log(props);
    console.log(history);
    return (
        <div className="App">
            <RouterWrapper>

                <div>
                    <Link to="/first">first</Link>
                </div>
                <div>

                    <Link to="/second">second</Link>
                </div>
                <div>

                    <RouterView routers={routers} />
                </div>
            </RouterWrapper>
        </div>
    );
}

export default App;
