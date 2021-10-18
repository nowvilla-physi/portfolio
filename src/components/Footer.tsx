import React from 'react';
import styles from '../styles/footer.module.scss';
import { COPYRIGHT } from '../strings';

const Footer: React.VFC = () => {
    return (
        <footer className={styles.footer}>
            <small>&copy; {COPYRIGHT}</small>
        </footer>
    );
};

export default Footer;
