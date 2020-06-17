import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

function Profiles() {
    return (
        <div>
            <h3>user list</h3>
            <ul>
                <li>
                    <NavLink
                        to='/profiles/woodz'
                        activeStyle={{ background: 'black', color: 'white' }}
                        isActive={(match, location) => {
                            return true;
                        }}>
                        Woodz
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/profiles/yuri'
                        activeStyle={{ background: 'black', color: 'white' }}
                        isActive={(match, location) => {
                            return false;
                        }}>
                        Yuri
                </NavLink>
                </li>
            </ul>

            <Route
                path='/profiles'
                exact
                render={() => <div>choose user</div>}
            />
            <Route path='/profiles/:username' component={Profile} />
            {/* <WithRouterSample /> */}
            <RouterHookSample />
        </div>
    );
}

export default Profiles;