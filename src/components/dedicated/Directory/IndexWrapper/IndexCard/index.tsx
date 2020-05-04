import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './IndexCard.module.scss';
import { ItemCardProps } from './types';
import MainButton from 'components/core/MainButton';

const IndexCard: FC<ItemCardProps> = ({
  effects = [''],
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
  const incomes = Object.values(income);
  const incomeAmount =
    incomes.length === 3
      ? `${incomes[0]} - ${incomes[1]} / ${incomes[2]}`
      : `${incomes[0]} / ${incomes[2]}`;
  const effectsList = !!effects
    ? effects.map((item, index) => (
        <p key={index} className={styles.effects}>
          {item}
        </p>
      ))
    : '';

  return (
    <div className={classnames(styles.wrapper, { [styles.active]: isActive })}>
      <div className={styles.headWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <MainButton label={'Money'} />
        </div>
        <div className={styles.body}>
          <p className={styles.item}>{label}</p>
        </div>
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
        <p>{location}</p>
        <p>USD ${incomeAmount}</p>
        <p>{incomeType}</p>
        <div>{effectsList}</div>
        <p>Sample {sample}</p>
      </div>
      <div className={styles.dates}>
        <p className={styles.item}>{startDate}</p>
        <p className={styles.item}>{endDate}</p>
      </div>
    </div>
  );
};

export default IndexCard;
