import React, { FC } from 'react';
import styles from './Background.module.scss';

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

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      {backgroungText.map(items => {
        return <div className={styles.title}>{items}</div>;
      })}
    </div>
  );
};

export default Header;
