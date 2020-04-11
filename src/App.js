import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'store/reducers';

import DirectoryContainer from './container/Directory';
import IndexBody from './components/dedicated/Index/IndexBody';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/directory" component={DirectoryContainer}></Route>
        <Route path="/" component={IndexBody}></Route>
      </Switch>
    </Provider>
  );
}

export default App;
