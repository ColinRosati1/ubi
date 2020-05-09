import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './IndexWrapper.module.scss';
import IndexCard from './IndexCard';

import Loader from 'components/core/Loader';
import { Ubi } from 'types';

const IndexWrapper: FC = () => {
  const ubiFiltered: Ubi[] = useSelector(state => state.ubiFilter);
  const ubiList: Ubi[] = useSelector(state => state.ubiList);
  const _filtered = ubiFiltered.length === 0 ? ubiList : ubiFiltered;
  const filteredItems = Object.values(_filtered).map((item, index) => (
    <IndexCard key={`${index}`} {...item} />
  ));
  const _body = !!ubiList.length ? filteredItems : <Loader />;

  return <div className={styles.wrapper}>{_body}</div>;
};

export default IndexWrapper;
