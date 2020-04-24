import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import MainButton from 'components/core/MainButton';

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <h1>Universal Basic Income</h1>{' '}
      </Link>
      <h3>A catalogue of UBI cases</h3>
    </div>
  );
};

export default Header;
