import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './SplashPage.module.scss';
import FadeTransition from 'components/core/FadeTransition';

const backgroungText = [
  'U',
  'n',
  'i',
  'v',
  'e',
  'r',
  's',
  'a',
  'l',
  'b',
  'a',
  's',
  'i',
  'c',
  'i',
  'n',
  'c',
  'o',
  'm',
  'e',
];

const IndexBody: FC = () => {
  return (
    <div className={styles.wrapper}>
      {backgroungText.map((items, index) => {
        return (
          <Link to="/directory" key={`color--${index}`}>
            <div className={styles.title}>{items}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default FadeTransition(IndexBody);
