import React from 'react';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll/modules';
import { Button, HamburgerMenu } from './index';
import turtleIcon from '../../public/images/turtle.png';
import pcLogo from '../../public/images/portfolio-logo.svg';
import styles from '../styles/header.module.scss';
import * as Strings from '../strings';

const Header: React.VFC = () => {
    const router = useRouter();
    const toTopScreen = () => {
        scroll.scrollToTop({ smooth: true, duration: 500 });
    };
    const showScreen = (url: string) => {
        if (router.pathname === url) {
            toTopScreen();
        } else {
            Router.push(url).then();
        }
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.header__logo}>
                <Image
                    className={styles.header__logo}
                    src={pcLogo}
                    alt='ポートフォリオロゴ'
                    onClick={() => showScreen(Strings.HOME_URL)}
                />
            </h1>
            <div className={styles.header__icon} onClick={toTopScreen}>
                <Image src={turtleIcon} alt='ポートフォリオアイコン' />
            </div>
            <nav className={styles.header__nav}>
                <Button
                    name={Strings.COMMON_SERVICES_BUTTON}
                    doClick={() => showScreen(Strings.SERVICES_URL)}
                />
                <Button
                    name={Strings.COMMON_WORKS_BUTTON}
                    doClick={() => showScreen(Strings.WORKS_URL)}
                />
                <Button
                    name={Strings.COMMON_SKILLS_BUTTON}
                    doClick={() => showScreen(Strings.SKILLS_URL)}
                />
                <Button
                    name={Strings.COMMON_CONTACT_BUTTON}
                    doClick={() => showScreen(Strings.CONTACT_URL)}
                />
            </nav>
            <HamburgerMenu />
        </header>
    );
};

export default Header;
