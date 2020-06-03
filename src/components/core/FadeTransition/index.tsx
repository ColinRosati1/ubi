import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './FadeTransition.module.scss';

export default (ChildCompnent: FC) => () => {
  const [onEnter, setOnEnter] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setOnEnter(!onEnter), []);
  return (
    <CSSTransition in={onEnter} timeout={1000} classNames={{ ...styles }}>
      <div className={styles.wrapper}>
        <ChildCompnent />
      </div>
    </CSSTransition>
  );
};
