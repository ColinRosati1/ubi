import React, { FC } from 'react'

import styles from './IndexCard.module.scss'
import { ItemCardProps } from './types'


const IndexCard: FC <ItemCardProps> = ({
    title, 
    // isActive, 
    label,
    location, 
    startDate, 
    endDate,
})=> {

    return ( 
    <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.label}>{label}</h4>
        <h4 className={styles.location}>{location}</h4>
        <h4 className={styles.startDate}>{startDate}</h4>
        <h4 className={styles.endDate}>{endDate}</h4>
    </div> 
        );
}
  
export default IndexCard;