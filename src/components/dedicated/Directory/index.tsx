import React, { FC } from 'react';
import styles from './Directory.module.scss';

import IndexWrapper from './IndexWrapper';

const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <IndexWrapper />
    </div>
  );
};

export default Body;
