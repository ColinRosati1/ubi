import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './IndexWrapper.module.scss';

import IndexCard from 'components/core/IndexCard';
import { Ubi } from 'store/actions';

const IndexWrapper: FC = () => {
  const ubiFiltered: Ubi[] = useSelector(state => state.ubiFilter);
  const ubiList: Ubi[] = useSelector(state => state.ubiList);
  const _filtered = ubiFiltered.length === 0 ? ubiList : ubiFiltered;

  return (
    <div className={styles.wrapper}>
      {!!ubiList.length ? (
        Object.values(_filtered).map((item, index) => <IndexCard key={`${index}`} {...item} />)
      ) : (
        <div className={styles.loader}></div>
      )}
    </div>
  );
};

export default IndexWrapper;
