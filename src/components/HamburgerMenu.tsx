import React, { useState } from 'react';
import Router from 'next/router';
import styles from '../styles/hamburger-menu.module.scss';
import * as Strings from '../strings';

const HamburgerMenu: React.VFC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const showScreen = (url: string) => {
        setIsOpen(false);
        Router.push(url).then();
    };

    return (
        <>
            <div
                className={
                    isOpen
                        ? styles['hamburger-menu-open']
                        : styles['hamburger-menu']
                }
                onClick={handleClick}
            >
                <span
                    className={
                        isOpen
                            ? styles['hamburger-menu-open__line']
                            : styles['hamburger-menu__line']
                    }
                />
                <span
                    className={
                        isOpen
                            ? styles['hamburger-menu-open__line']
                            : styles['hamburger-menu__line']
                    }
                />
                <span
                    className={
                        isOpen
                            ? styles['hamburger-menu-open__line']
                            : styles['hamburger-menu__line']
                    }
                />
            </div>
            <div className={isOpen ? styles['mask-open'] : styles.mask}>
                <nav className={styles['mask-open__nav']}>
                    <ul className={styles['mask-open__nav-list']}>
                        <li
                            className={styles['mask-open__nav-list-item']}
                            onClick={() => showScreen(Strings.HOME_URL)}
                        >
                            {Strings.COMMON_HOME_BUTTON}
                        </li>
                        <li
                            className={styles['mask-open__nav-list-item']}
                            onClick={() => showScreen(Strings.SERVICES_URL)}
                        >
                            {Strings.COMMON_SERVICES_BUTTON}
                        </li>
                        <li
                            className={styles['mask-open__nav-list-item']}
                            onClick={() => showScreen(Strings.WORKS_URL)}
                        >
                            {Strings.COMMON_WORKS_BUTTON}
                        </li>
                        <li
                            className={styles['mask-open__nav-list-item']}
                            onClick={() => showScreen(Strings.SKILLS_URL)}
                        >
                            {Strings.COMMON_SKILLS_BUTTON}
                        </li>
                        <li
                            className={styles['mask-open__nav-list-item']}
                            onClick={() => showScreen(Strings.CONTACT_URL)}
                        >
                            {Strings.COMMON_CONTACT_BUTTON}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HamburgerMenu;
