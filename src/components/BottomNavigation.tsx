import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import {
    faHome,
    faHandshake,
    faLaptopCode,
    faTools,
    faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';
import styles from '../styles/bottom-navigation.module.scss';
import * as Strings from '../strings';

const BottomNavigation: React.VFC = () => {
    const router = useRouter();
    const [isOpened, setIsOpened] = useState({
        isOpenedHome: true,
        isOpenedServices: false,
        isOpenedWorks: false,
        isOpenedSkills: false,
        isOpenedContact: false,
    });

    useEffect(() => {
        if (router.pathname === Strings.HOME_URL) {
            setIsOpened({
                isOpenedHome: true,
                isOpenedServices: false,
                isOpenedWorks: false,
                isOpenedSkills: false,
                isOpenedContact: false,
            });
        } else if (router.pathname === Strings.SERVICES_URL) {
            setIsOpened({
                isOpenedHome: false,
                isOpenedServices: true,
                isOpenedWorks: false,
                isOpenedSkills: false,
                isOpenedContact: false,
            });
        } else if (router.pathname === Strings.WORKS_URL) {
            setIsOpened({
                isOpenedHome: false,
                isOpenedServices: false,
                isOpenedWorks: true,
                isOpenedSkills: false,
                isOpenedContact: false,
            });
        } else if (router.pathname === Strings.SKILLS_URL) {
            setIsOpened({
                isOpenedHome: false,
                isOpenedServices: false,
                isOpenedWorks: false,
                isOpenedSkills: true,
                isOpenedContact: false,
            });
        } else if (router.pathname === Strings.CONTACT_URL) {
            setIsOpened({
                isOpenedHome: false,
                isOpenedServices: false,
                isOpenedWorks: false,
                isOpenedSkills: false,
                isOpenedContact: true,
            });
        }
    }, [router.pathname]);

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
        <nav className={styles['bottom-navigation']}>
            <ul className={styles['bottom-navigation__list']}>
                <li
                    className={
                        isOpened.isOpenedHome
                            ? styles['bottom-navigation__list-item--open']
                            : styles['bottom-navigation__list-item']
                    }
                    onClick={() => showScreen(Strings.HOME_URL)}
                >
                    <FontAwesomeIcon icon={faHome} />
                    <br />
                    <span>Home</span>
                </li>
                <li
                    className={
                        isOpened.isOpenedServices
                            ? styles['bottom-navigation__list-item--open']
                            : styles['bottom-navigation__list-item']
                    }
                    onClick={() => showScreen(Strings.SERVICES_URL)}
                >
                    <FontAwesomeIcon icon={faHandshake} />
                    <br />
                    <span>Services</span>
                </li>
                <li
                    className={
                        isOpened.isOpenedWorks
                            ? styles['bottom-navigation__list-item--open']
                            : styles['bottom-navigation__list-item']
                    }
                    onClick={() => showScreen(Strings.WORKS_URL)}
                >
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <br />
                    <span>Works</span>
                </li>
                <li
                    className={
                        isOpened.isOpenedSkills
                            ? styles['bottom-navigation__list-item--open']
                            : styles['bottom-navigation__list-item']
                    }
                    onClick={() => showScreen(Strings.SKILLS_URL)}
                >
                    <FontAwesomeIcon icon={faTools} />
                    <br />
                    <span>Skills</span>
                </li>
                <li
                    className={
                        isOpened.isOpenedContact
                            ? styles['bottom-navigation__list-item--open']
                            : styles['bottom-navigation__list-item']
                    }
                    onClick={() => showScreen(Strings.CONTACT_URL)}
                >
                    <FontAwesomeIcon icon={faAddressCard} />
                    <br />
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNavigation;
