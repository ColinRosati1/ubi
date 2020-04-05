import React, { FC } from 'react';

import SearchItems from './SearchItems';
import styles from './SearchWrapper.module.scss';

const SearchWrapper: FC = () => {
  return (
    <div className={styles.wrapper}>
      <SearchItems />
    </div>
  );
};

export default SearchWrapper;
