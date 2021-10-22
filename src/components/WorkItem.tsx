import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import styles from '../styles/work-item.module.scss';

type Props = {
    imgUrl: any;
    siteSummary: string;
    siteUrl?: string;
};

const WorkItem: React.VFC<Props> = (props) => {
    const { imgUrl, siteSummary, siteUrl } = props;
    const openSite = () => {
        if (siteUrl === null || siteUrl === undefined) {
            alert('Coming soon...');
        } else {
            Router.push(siteUrl).then();
        }
    };

    return (
        <button
            type='button'
            className={styles['work-item']}
            onClick={() => openSite()}
        >
            <Image
                className={styles['work-item__image']}
                src={imgUrl}
                alt='成果物'
            />
            <p className={styles['work-item__summary']}>{siteSummary}</p>
        </button>
    );
};

export default WorkItem;
