import React from 'react';

import { storiesOf } from '@storybook/react';

import GetInstall from '../pages/GetInstall';
import SimpleRouter from '../pages/SimpleRouter/SimpleRouter';
import ChildRouter from '../pages/ChildRouter/ChildRouter';
import AuthRouter from '../pages/AuthRouter/AuthRouter';

storiesOf('Welcome', module).add('get install', () => <GetInstall />);


storiesOf('examples', module)
    .add('simple router', () => <SimpleRouter />)
    .add('router with children', () => <ChildRouter />)
    .add('router with auth', () => <AuthRouter />);

