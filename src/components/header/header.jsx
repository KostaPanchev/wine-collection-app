import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return(
        <header className={styles.appHeader}>
            <div className='container'>
                <h1 className={styles.appTitle}>Wine Collection App</h1>
            </div>
        </header>
    );
};

export default Header;