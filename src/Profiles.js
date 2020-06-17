import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles() {
    return (
        <div>
            <h3>user list</h3>
            <ul>
                <li><Link to='/profiles/woodz'>Woodz</Link></li>
                <li><Link to='/profiles/yuri'>Yuri</Link></li>
            </ul>

            <Route
                path='/profiles'
                exact
                render={() => <div>choose user</div>}
            />
            <Route path='/profiles/:username' component={Profile} />
            <WithRouterSample />
        </div>
    );
}

export default Profiles;