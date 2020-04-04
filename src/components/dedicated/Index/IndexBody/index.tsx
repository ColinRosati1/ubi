import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './IndexBody.module.scss';

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
  ' ',
  'i',
  'n',
  'c',
  'o',
  'm',
  'e',
];

const IndexBody: FC = () => {
  const el = document.querySelector('IndexBody');
  console.log(el);
  return (
    <div className={styles.wrapper}>
      {backgroungText.map((items, index) => {
        return (
          <Link to="/directory" key={index}>
            <div className={styles.title}>{items}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default IndexBody;
