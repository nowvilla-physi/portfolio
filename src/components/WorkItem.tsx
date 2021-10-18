import React from 'react';
import Image from 'next/image';
import styles from '../styles/work-item.module.scss';

type Props = {
    imgUrl: any;
    siteSummary: string;
};

const WorkItem: React.VFC<Props> = (props) => {
    const { imgUrl, siteSummary } = props;
    const openSite = () => {
        alert('Coming soon...');
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
