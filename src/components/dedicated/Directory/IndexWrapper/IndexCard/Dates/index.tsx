import React, { FC } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './Dates.module.scss';
import DateProps from './types';

const Dates: FC<DateProps> = ({ startDate, endDate }) => {
  return (
    <div className={styles.dates}>
      <div className={styles.flex}>
        <p className={styles.item}>{startDate}</p>
        <p className={styles.item}>{endDate}</p>
      </div>
      <Icon className={styles.dateIcon} name="calendar alternate outline" />
    </div>
  );
};

export default Dates;
