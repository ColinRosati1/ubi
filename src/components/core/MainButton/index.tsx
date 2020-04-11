import React, { FC } from 'react';
import styles from './MainButton.module.scss';
import { BadgeProps } from './types';

const MainButton: FC<BadgeProps> = ({ label = 'button' }) => {
  return <div className={styles.button}>{label}</div>;
};

export default MainButton;
