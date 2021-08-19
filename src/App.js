import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Redirect
} from 'react-router-dom';
import JsQuestions from './components/js-questions/js-questions';
import ReactQuestions from './components/react-questions/react-questions';
import RxJsQuestions from "./components/rxjs-questions/rxjs-questions";

function App() {
    return (
        <Router>
            <div className='App'>
                <header>
                    <NavLink activeClassName='active' to='/js'>JavaScript</NavLink>
                    <NavLink activeClassName='active' to='/react'>ReactJs</NavLink>
                    <NavLink activeClassName='active' to='/rxjs'>RxJs</NavLink>
                </header>
                <main>
                    <Switch>
                        <Route path='/js'>
                            <JsQuestions/>
                        </Route>
                        <Route path='/react'>
                            <ReactQuestions/>
                        </Route>
                        <Route path='/rxjs'>
                            <RxJsQuestions/>
                        </Route>
                        <Redirect from={''} to={`/js`}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
