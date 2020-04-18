import React, { FC } from 'react';

import styles from './IndexWrapper.module.scss';
import { IndexWrapperProps } from './types';

import IndexCard from 'components/core/IndexCard';

const IndexWrapper: FC<IndexWrapperProps> = ({ UbiList }) => {
  return !UbiList ? (
    <IndexCard />
  ) : (
    <div className={styles.wrapper}>
      {Object.values(UbiList).map((item, index) => (
        <IndexCard {...item} key={index} />
      ))}
    </div>
  );
};

export default IndexWrapper;
