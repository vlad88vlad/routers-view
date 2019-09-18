import React from 'react';
import RouterView, { RouterWrapper, Link, history } from 'router-view-dom';
import GetInstall from './pages/GetInstall';
import './App.css';
import 'antd/dist/antd.css';

import routers from './router';

console.log(routers);

function App(props) {

    return (
        <div className="App">
            <GetInstall />
        </div>
    );
}

export default App;
