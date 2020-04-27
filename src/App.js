import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { DirectoryContainer } from './components/container/Directory';
import IndexBody from './components/dedicated/SplashPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/directory" component={DirectoryContainer}></Route>
        <Route path="/" component={IndexBody}></Route>
      </Switch>
    </Router>
  );
}

export default App;
