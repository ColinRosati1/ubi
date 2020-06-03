import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import IndexCard from '../IndexCard';

import { Ubi } from 'types';
import FadeTransition from 'components/core/FadeTransition';

const IndexList: FC = () => {
  const ubiFiltered: Ubi[] = useSelector(state => state.ubiFilter);
  const ubiList: Ubi[] = useSelector(state => state.ubiList);
  const _filtered = ubiFiltered.length === 0 ? ubiList : ubiFiltered;
  const filteredItems = Object.values(_filtered).map((item, index) => (
    <IndexCard key={`${index}`} {...item} />
  ));

  return <>{filteredItems}</>;
};

export default FadeTransition(IndexList);
