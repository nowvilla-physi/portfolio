import React from 'react';
import Image from 'next/image';
import styles from '../styles/loading.module.scss';
import loadingIcon from '../../public/images/loading.gif';

type Props = {
    message: string;
    isShow: boolean;
};

const Loading: React.VFC<Props> = (props) => {
    const { message, isShow } = props;

    return (
        <div className={isShow ? styles.loading : styles['loading--hide']}>
            <Image
                className={styles.loading__icon}
                src={loadingIcon}
                alt='ローディング'
            />
            <p className={styles.loading__message}>{message}</p>
        </div>
    );
};

export default Loading;
