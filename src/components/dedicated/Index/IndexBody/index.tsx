import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

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

const colors = {
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
  Black: '#000000',
};

const IndexBody: FC = () => {
  const [color, setColor] = useState(colors.Sea);
  useEffect(() => {
    document.body.style.background = color;
    document.body.style.transition = 'all 0.4s';
    setTimeout(() => {
      setColor('#ffffff');
    }, 400);
  }, [color]);

  return (
    <div className={cx(styles.wrapper, 'index', styles.display)} id={'index'}>
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

export default IndexBody;
