import React from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { Button } from '../components';
import ErrorImage from '../../public/images/error.png';
import styles from '../styles/error.module.scss';
import * as Strings from '../strings';

const Error: React.VFC = () => {
    const toHome = () => {
        Router.push(Strings.HOME_URL).then();
    };

    return (
        <div className={styles.error}>
            <h2 className={styles['error__not-found']}>
                {Strings.ERROR_NOT_FOUND}
            </h2>
            <p className={styles.error__message}>{Strings.ERROR_404_MESSAGE}</p>
            <div className={styles['error__image-wrapper']}>
                <Image
                    className={styles.error__image}
                    src={ErrorImage}
                    alt='エラー'
                />
            </div>
            <Button name={Strings.ERROR_RETURN_HOME_BUTTON} doClick={toHome} />
        </div>
    );
};

export default Error;
