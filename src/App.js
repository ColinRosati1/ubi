import React from 'react';

import styles from './App.module.scss'

import Background from './components/dedicated/Directory/Background'
import Body from './components/dedicated/Directory/Body'

function App() {
  return (
    <div className={styles.Wrapper}>
      <Background/>
      <Body/>
    </div>
  );
}

export default App;
