import React from 'react';
import RouterView, { Link } from 'router-view-dom';


function SecondPage(props) {
    const { route: { routes } } = props;
    console.log(routes);
    return (
        <div>
            <h1> SecondPage</h1>
            <Link to="/first"> go to first </Link>
            <Link to="/second/sub"> go to sub </Link>
            <div>
                <RouterView routers={routes} />
            </div>
        </div>
    );
}

export default SecondPage;
