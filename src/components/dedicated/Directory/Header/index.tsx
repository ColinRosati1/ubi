import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headWrapper}>
        <Link to="/">
          <h1>Universal Basic Income</h1>{' '}
        </Link>
        <Icon loading name="smile outline" />
      </div>
      <h3>A catalogue of UBI cases</h3>
    </div>
  );
};

export default Header;
