import React from 'react';
import { Link } from 'router-view-dom';


function FirstPage(props) {
    console.log(props);
    return (
        <div>
            FirstPage
            <Link to="/second">go to second</Link>

        </div>
    );
}

export default FirstPage;
