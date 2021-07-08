import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch, Redirect
} from 'react-router-dom';
import ShowNameButton from './questions/show-user-name';
import AsyncAwait from './questions/async-await';
import Closures from './questions/closures';
import Aggregation from './questions/aggregation';


const JsQuestions = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className='side-bar'>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/show-name`}>Show name</NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/async-await`}>Async/Await</NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/closures`}>Closures</NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/aggregation`}>Aggregation</NavLink>
                </div>
            </div>
            <div className={'content'}>
                <Switch>
                    <Route path={`${match.path}/show-name`}>
                        <ShowNameButton/>
                    </Route>
                    <Route path={`${match.path}/async-await`}>
                        <AsyncAwait/>
                    </Route>
                    <Route path={`${match.path}/closures`}>
                        <Closures/>
                    </Route>
                    <Route path={`${match.path}/aggregation`}>
                        <Aggregation/>
                    </Route>
                    <Redirect from={match.path} to={`${match.path}/show-name`} />
                </Switch>
            </div>
        </>
    );
}

export default JsQuestions;
