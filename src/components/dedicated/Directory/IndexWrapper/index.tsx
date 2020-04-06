import React, { FC } from 'react';

import styles from './IndexWrapper.module.scss';

import IndexCard from 'components/core/IndexCard';
import { universalBasicIncomeCases } from 'constants/universalBasicIncomeCases';

const IndexWrapper: FC = () => {
  const entries = universalBasicIncomeCases();
  return (
    <div className={styles.wrapper}>
      {Object.values(entries).map((item, index) => (
        <IndexCard {...item} key={index} />
      ))}
    </div>
  );
};

export default IndexWrapper;
