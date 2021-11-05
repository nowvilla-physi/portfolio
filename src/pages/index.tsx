import { faLink, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import * as Strings from '../strings';
import myIcon from '../../public/images/myself.jpg';
import { Head } from '../components/index';

const Home: React.VFC = () => {
    return (
        <div className={styles.home}>
            <Head
                title="Tomoki's Portfolio"
                url='https://portfolio-tomoki.vercel.app/'
            />
            <section className={styles.home__profile}>
                <h2 className={styles['home__profile--title']}>
                    {Strings.HOME_PROFILE_TITLE}
                </h2>
                <p className={styles['home__profile--name']}>
                    {Strings.HOME_PROFILE_NAME}
                </p>
                <p className={styles['home__profile--favorite']}>
                    {Strings.HOME_PROFILE_FAVORITE}
                </p>
                <div>
                    <Image
                        className={styles['home__profile--my-photo']}
                        src={myIcon}
                        alt='プロフィール画像'
                        width={100}
                        height={100}
                    />
                </div>

                <div className={styles.home__certification}>
                    <h3 className={styles['home__certification--title']}>
                        {Strings.HOME_CERTIFICATION_TITLE}
                    </h3>
                    <ul className={styles['home__certification--list']}>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link href={Strings.HOME_CERTIFICATION_FE_URL}>
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {Strings.HOME_CERTIFICATION_FE}
                                </a>
                            </Link>
                        </li>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link href={Strings.HOME_CERTIFICATION_AP_URL}>
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {Strings.HOME_CERTIFICATION_AP}
                                </a>
                            </Link>
                        </li>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link
                                href={
                                    Strings.HOME_CERTIFICATION_WEB_DESIGN_GR_URL
                                }
                            >
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {Strings.HOME_CERTIFICATION_WEB_DESIGN_GR}
                                </a>
                            </Link>
                        </li>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link
                                href={
                                    Strings.HOME_CERTIFICATION_WEB_CREATOR_EXPERT_URL
                                }
                            >
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {
                                        Strings.HOME_CERTIFICATION_WEB_CREATOR_EXPERT
                                    }
                                </a>
                            </Link>
                        </li>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link href={Strings.HOME_CERTIFICATION_PYTHON3_URL}>
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {Strings.HOME_CERTIFICATION_PYTHON3}
                                </a>
                            </Link>
                        </li>
                        <li
                            className={styles['home__certification--list-item']}
                        >
                            <Link
                                href={
                                    Strings.HOME_CERTIFICATION_JAVA_SILVER_URL
                                }
                            >
                                <a
                                    className={
                                        styles[
                                            'home__certification--list-item-link'
                                        ]
                                    }
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {Strings.HOME_CERTIFICATION_JAVA_SILVER}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className={styles['home__profile--description']}>
                    {Strings.HOME_PROFILE_DESCRIPTION}
                </p>
                <ul className={styles.home__link}>
                    <li className={styles['home__link--item']}>
                        <Link href={Strings.HOME_GITHUB_URL}>
                            <a
                                title='Github'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon
                                    className={styles['home__link--item-icon']}
                                    icon={faGithub}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={styles['home__link--item']}>
                        <Link href={Strings.HOME_TWITTER_URL}>
                            <a
                                title='Twitter'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon
                                    className={styles['home__link--item-icon']}
                                    icon={faTwitter}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={styles['home__link--item']}>
                        <Link href={Strings.HOME_ZENN_URL}>
                            <a
                                title='Zenn'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon
                                    className={styles['home__link--item-icon']}
                                    icon={faLink}
                                />
                            </a>
                        </Link>
                    </li>
                    <li className={styles['home__link--item']}>
                        <Link href={Strings.HOME_QIITA_URL}>
                            <a
                                title='Qiita'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon
                                    className={styles['home__link--item-icon']}
                                    icon={faSearch}
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </section>

            <div className={styles.home__hero} />
        </div>
    );
};

export default Home;
