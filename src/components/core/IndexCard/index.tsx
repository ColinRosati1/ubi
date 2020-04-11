import React, { FC } from 'react';

import styles from './IndexCard.module.scss';
import { ItemCardProps } from './types';
import MainButton from 'components/core/MainButton';

const IndexCard: FC<ItemCardProps> = ({
  effects = 'text',
  endDate = 'end date',
  funding = 'text',
  income = '$number',
  incomeType = 'text',
  isActive,
  label = ' label',
  location = 'text',
  organization = 'text',
  sample = 'text',
  sampleAge,
  startDate = 'start date',
  title = 'title',
}) => {
  console.log();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <MainButton label={'Money'} />
      </div>
      <div className={styles.body}>
        <p className={styles.item}>{label}</p>
      </div>
      <hr></hr>
      <div className={styles.body}>
        <div className={styles.categoryWrapper}>
          <p className={styles.category}>organization</p>
          <p>{organization}</p>
        </div>
        <div className={styles.categoryWrapper}>
          <p className={styles.category}>Funding</p>
          <p>{funding}</p>
        </div>

        <p>{income}</p>
        <p>{incomeType}</p>
        <p>{effects}</p>
        <p>{sample}</p>
      </div>
      <div className={styles.dates}>
        <p className={styles.item}>{startDate}</p>
        <p className={styles.item}>{endDate}</p>
      </div>
    </div>
  );
};

export default IndexCard;
