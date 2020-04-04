import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Directory from './components/dedicated/Directory';
import IndexBody from './components/dedicated/Index/IndexBody';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/directory" component={Directory}></Route>
        <Route path="/" component={IndexBody}></Route>
      </Switch>
    </div>
  );
}

export default App;
