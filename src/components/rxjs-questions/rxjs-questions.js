import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    Redirect
} from 'react-router-dom';
import InputHint from "./questions/input-hint";


const RxJsQuestions = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className='side-bar'>
                <div>
                    <NavLink activeClassName='active' to={`${match.url}/input-hint`}>Input Hint</NavLink>
                </div>
            </div>
            <div className={'content'}>
                <Switch>
                    <Route path={`${match.path}/input-hint`}>
                        <InputHint/>
                    </Route>
                    <Redirect from={match.path} to={`${match.path}/input-hint`}/>
                </Switch>
            </div>
        </>
    );
}

export default RxJsQuestions;
