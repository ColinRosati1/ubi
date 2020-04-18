import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Directory.module.scss';
import IndexWrapper from 'components/dedicated/Directory/IndexWrapper';

import MainButton from 'components/core/MainButton';
import SearchWrapper from 'components/dedicated/Directory/SearchWrapper';

import { StoreState } from 'store/reducers';
import { Ubi } from 'store/actions';

interface AppProps {
  ubiList: Ubi;
  fetchUbis: Function;
}

const mapStateToProps = ({ ubiList }: StoreState) => {
  return { ubiList };
};

const _DirectoryContainer: FC<AppProps> = ({ ubiList }) => {
  console.log('mapStateToProps', ubiList);
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <MainButton label={'home'} />
      </Link>
      <SearchWrapper />
      <IndexWrapper UbiList={ubiList} />
    </div>
  );
};

export const DirectoryContainer = connect(mapStateToProps)(_DirectoryContainer);
