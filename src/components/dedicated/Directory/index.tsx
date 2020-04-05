import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Directory.module.scss';
import IndexWrapper from './IndexWrapper';

import MainButton from '../../core/MainButton';
import SearchWrapper from './SearchWrapper';

const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <MainButton label={'home'} />
      </Link>
      <SearchWrapper />
      <IndexWrapper />
    </div>
  );
};

export default Body;
