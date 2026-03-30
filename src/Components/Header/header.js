import React from 'react';
import styles from './header.module.scss';

function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img alt="logo" src="./coffee.png" height="30px"/>
                    <h3>The Brew Map</h3>
                </div>
                <div className={styles.headerLinks}>
                    <ul className={styles.headerLinkList}>
                        <li className={styles.links}>Home</li>
                        <li className={styles.links}>Coffe Shops</li>
                        <li className={styles.links}>Blog</li>
                        <li className={styles.links}>About</li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header