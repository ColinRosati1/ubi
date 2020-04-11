import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Directory.module.scss';
import IndexWrapper from 'components/dedicated/Directory/IndexWrapper';

import MainButton from 'components/core/MainButton';
import SearchWrapper from 'components/dedicated/Directory/SearchWrapper';

import { State } from 'types';
import { universalBasicIncomeCases } from 'constants/universalBasicIncomeCases';
const entries = universalBasicIncomeCases();

const mapStateToProps = (state: State): State => ({
  UBIScenarios: Object.entries(entries),
});

const DiretoryContainer: FC = () => {
  console.log(mapStateToProps);
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <MainButton label={'home'} />
      </Link>
      <SearchWrapper />
      <IndexWrapper />
    </div>
  );
};

export default connect(mapStateToProps)(DiretoryContainer);
