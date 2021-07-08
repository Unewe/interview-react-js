import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Redirect
} from 'react-router-dom';
import FocusInput from "./questions/focus-input";
import Optimization from "./questions/optimization";
import Users from "./questions/users";


const ReactQuestions = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className='side-bar'>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/focus-input`}>Focus Input</NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/optimization`}>Optimization</NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/users`}>Users</NavLink>
                </div>
            </div>
            <div className={'content'}>
                <Switch>
                    <Route path={`${match.path}/focus-input`}>
                        <FocusInput/>
                    </Route>
                    <Route path={`${match.path}/optimization`}>
                        <Optimization/>
                    </Route>
                    <Route path={`${match.path}/users`}>
                        <Users/>
                    </Route>
                    <Redirect from={match.path} to={`${match.path}/focus-input`}/>
                </Switch>
            </div>
        </>
    );
}

export default ReactQuestions;
