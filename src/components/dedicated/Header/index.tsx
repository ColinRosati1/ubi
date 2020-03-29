import React, { FC } from 'react'
import styles from './Header.module.scss'


const Header: FC = ()=> {
    return ( <div className={styles.wrapper}><h1 className={styles.title}>Universal basic income</h1></div> );
}
  
export default Header;
