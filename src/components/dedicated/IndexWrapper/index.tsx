import React from 'react'

import styles from './IndexWrapper.module.scss'

import IndexCard from '../../core/IndexCard'
import {universalBasicIncomeCases} from '../../../constants/universalBasicIncomeCases'

export default function IndexWrapper() {
    console.log(universalBasicIncomeCases())
    const entries = universalBasicIncomeCases();
    return (
        <div className={styles.wrapper}>
            {Object.values(entries).map( (item, index) => <IndexCard {...item} key={index}/>)} 
        </div>
    )
}
