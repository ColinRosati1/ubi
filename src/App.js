import React from 'react';

import styles from './App.module.scss'

import Header from './components/dedicated/Header'
import Body from './components/dedicated/Body'

function App() {
  return (
    <div className={styles.Wrapper}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
