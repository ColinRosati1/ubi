import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Directory.module.scss';
import IndexWrapper from './IndexWrapper';

import MainButton from '../../core/MainButton';

const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <MainButton label={'home'} />
      </Link>
      <IndexWrapper />
    </div>
  );
};

export default Body;
