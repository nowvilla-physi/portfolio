import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import styles from '../styles/work-item.module.scss';

type Props = {
    imgUrl: any;
    siteSummary: string;
    siteUrl: string;
};

const WorkItem: React.VFC<Props> = (props) => {
    const { imgUrl, siteSummary, siteUrl } = props;
    const openSite = () => {
        Router.push(siteUrl).then();
    };

    return (
        <button
            type='button'
            className={styles['work-item']}
            onClick={() => openSite()}
        >
            <div className={styles['work-item__image-wrapper']}>
                <Image
                    className={styles['work-item__image']}
                    src={imgUrl}
                    alt='成果物'
                />
            </div>

            <p className={styles['work-item__summary']}>{siteSummary}</p>
        </button>
    );
};

export default WorkItem;
