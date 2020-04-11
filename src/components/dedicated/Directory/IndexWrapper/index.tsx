import React, { FC } from 'react';

import styles from './IndexWrapper.module.scss';
import { IndexWrapperProps } from './types';

import IndexCard from 'components/core/IndexCard';
import { universalBasicIncomeCases } from 'constants/universalBasicIncomeCases';

const IndexWrapper: FC<IndexWrapperProps> = UBIScenarios => {
  // const entries = UBIScenarios;
  const entries = universalBasicIncomeCases();
  console.log(entries);

  return !entries ? (
    <IndexCard />
  ) : (
    <div className={styles.wrapper}>
      {Object.values(entries).map((item, index) => (
        <IndexCard {...item} key={index} />
      ))}
    </div>
  );
};

export default IndexWrapper;
