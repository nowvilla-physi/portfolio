import React from 'react';
import Image from 'next/image';
import styles from '../styles/card-item.module.scss';

type Props = {
    alt: string;
    imgUrl: any;
    title: string;
};

const CardItem: React.VFC<Props> = (props) => {
    const { imgUrl, title, alt } = props;
    return (
        <div className={styles['card-item']}>
            <Image
                className={styles['card-item__image']}
                width={120}
                height={120}
                src={imgUrl}
                alt={alt}
            />
            <p className={styles['card-item__title']}>{title}</p>
        </div>
    );
};

export default CardItem;
