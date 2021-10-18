import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '../styles/service-item.module.scss';

type Props = {
    title: string;
    ruby: string;
    icon: IconDefinition;
    description: string;
};

const ServiceItem: React.VFC<Props> = (props) => {
    const { title, ruby, icon, description } = props;
    return (
        <section className={styles['service-item']}>
            <h2 className={styles['service-item__title']}>{title}</h2>
            <h3 className={styles['service-item__ruby']}>{ruby}</h3>
            <FontAwesomeIcon
                className={styles['service-item__icon']}
                icon={icon}
            />
            <p className={styles['service-item__description']}>{description}</p>
        </section>
    );
};

export default ServiceItem;
