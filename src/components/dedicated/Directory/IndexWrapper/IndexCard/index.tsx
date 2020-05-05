import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './IndexCard.module.scss';
import { ItemCardProps } from './types';
import MainButton from 'components/core/MainButton';
import { formatIncome } from './util';

const IndexCard: FC<ItemCardProps> = ({
  effects = [''],
  date = {},
  funding = 'text',
  income = {},
  incomeType = 'text',
  isActive,
  label = ' label',
  location = 'text',
  organization = 'text',
  sample = 'text',
  sampleAge,
  title = 'title',
}) => {
  const incomeAmount = formatIncome(income);

  const effectsList = !!effects
    ? effects.map((item, index) => (
        <p className={styles.black} key={index}>
          {item}
        </p>
      ))
    : '';

  return (
    <div className={classnames(styles.wrapper, { [styles.active]: isActive })}>
      <div className={styles.headWrapper}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.black}>{location}</p>
          </div>
          <MainButton label={'Money'} />
        </div>
        <div className={styles.body}>
          <p className={styles.label}>{label}</p>
        </div>
        <hr />
      </div>

      <div className={styles.body}>
        <div className={styles.categoryWrapper}>
          <div className={styles.category}>
            <h5>Organization</h5>
            <p>{organization}</p>
          </div>
          <div className={styles.category}>
            <h5>Funding</h5>
            <p>{funding}</p>
          </div>
          <div className={styles.category}>
            <h5>{incomeType}</h5>
            <p>USD {incomeAmount}</p>
          </div>
          <div className={styles.category}>
            <h5>Sample</h5>
            <p> {sample}</p>
            <p>{sampleAge}</p>
          </div>
        </div>

        <div className={classnames(styles.effects, styles.black)}>{effectsList}</div>
        <div className={styles.dates}>
          <p className={styles.item}>{date.startDate}</p>
          <p className={styles.item}>{date.endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
