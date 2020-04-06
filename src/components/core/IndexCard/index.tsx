import React, { FC } from 'react';

import styles from './IndexCard.module.scss';
import { ItemCardProps } from './types';
import MainButton from 'components/core/MainButton';

const IndexCard: FC<ItemCardProps> = ({
  endDate,
  funding,
  // isActive,
  income,
  label,
  location,
  organization,
  startDate,
  title,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <MainButton label={'Money'} />
      </div>
      <p className={styles.item}>{label}</p>
      <p className={styles.item2}>{organization}</p>
      <p className={styles.item2}>{funding}</p>
      <p className={styles.item2}>{income}</p>
      <p className={styles.item2}>{location}</p>
      <div className={styles.dates}>
        <p className={styles.item}>{startDate}</p>
        <p className={styles.item}>{endDate}</p>
      </div>
    </div>
  );
};

export default IndexCard;
