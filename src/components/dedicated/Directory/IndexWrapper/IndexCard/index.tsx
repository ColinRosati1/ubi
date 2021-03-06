import React, { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'semantic-ui-react';

import styles from './IndexCard.module.scss';
import { ItemCardProps } from './types';
import Links from './Links';
import { formatIncome } from './util';
import Dates from './Dates';

const IndexCard: FC<ItemCardProps> = ({
  effects = [''],
  date,
  funding = 'text',
  income = {},
  incomeType = 'text',
  isActive,
  label = ' label',
  location = 'text',
  organization = 'text',
  sample = 'text',
  sampleAge,
  src = [],
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
        </div>
        <div className={styles.body}>
          <p className={styles.label}>{label}</p>
        </div>
        <hr />
      </div>

      <div className={styles.body}>
        <div className={styles.categoryWrapper}>
          <div className={styles.category}>
            <h5 className={styles.categoryItem}>Organization</h5>
            <Icon className={styles.categoryItem} name="folder open" />
            <p>{organization}</p>
          </div>
          <div className={styles.category}>
            <h5 className={styles.categoryItem}>Funding</h5>
            <Icon className={styles.categoryItem} name="gem outline" />
            <p>{funding}</p>
          </div>
          <div className={styles.category}>
            <h5 className={styles.categoryItem}>{incomeType}</h5>
            <Icon className={styles.categoryItem} name="lemon" />
            <p>
              <Icon name="money" />
              USD {incomeAmount}
            </p>
          </div>
          <div className={styles.category}>
            <h5 className={styles.categoryItem}>Sample</h5>
            <Icon className={styles.categoryItem} name="street view" />
            <p> {sample}</p>
            <p>{sampleAge}</p>
          </div>
        </div>

        <div className={classnames(styles.effects, styles.black)}>{effectsList}</div>
        <Dates {...date} />
      </div>
      <Links source={src} />
    </div>
  );
};

export default IndexCard;
