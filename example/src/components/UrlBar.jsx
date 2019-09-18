import React from 'react';
import { Input } from 'antd';
import { history } from 'router-view-dom';


function UrlBar(props) {
    console.log(props);
    const { location: { pathname } } = history;
    console.log(pathname);
    console.log(document.location);
    return (
        <div>
            <Input addonBefore="http://" addonAfter=".com" value={pathname}  readOnly/>

        </div>
    );
}

export default UrlBar;
