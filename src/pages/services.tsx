import React from 'react';
import {
    faEdit,
    faKeyboard,
    faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { CardItem, Head, ServiceItem } from '../components/index';
import styles from '../styles/services.module.scss';
import * as Strings from '../strings';
import webPalette from '../../public/images/tmp.png';

const Services: React.VFC = () => {
    return (
        <div className={styles.services}>
            <Head
                title="Tomoki's Portfolio | Services"
                url='https://portfolio-tomoki.vercel.app/services'
            />
            <h2 className={styles.services__title} />
            <div className={styles.services__container}>
                <ServiceItem
                    title={Strings.SERVICES_HEARING_TITLE}
                    ruby={Strings.SERVICES_HEARING_RUBY}
                    icon={faEdit}
                    description={Strings.SERVICES_HEARING_DESCRIPTION}
                />
                <ServiceItem
                    title={Strings.SERVICES_DESIGN_TITLE}
                    ruby={Strings.SERVICES_DESIGN_RUBY}
                    icon={faPalette}
                    description={Strings.SERVICES_DESIGN_DESCRIPTION}
                />
                <ServiceItem
                    title={Strings.SERVICES_CODING_TITLE}
                    ruby={Strings.SERVICES_CODING_RUBY}
                    icon={faKeyboard}
                    description={Strings.SERVICES_CODING_DESCRIPTION}
                />
            </div>
            <section className={styles['services__a']}>
                <h2 className={styles['services__sub-title']}>対応一覧</h2>
                <div className={styles.services__tmp}>
                    <CardItem alt='alt' imgUrl={webPalette} title='aide' />
                    <CardItem alt='alt' imgUrl={webPalette} title='aide' />
                    <CardItem alt='alt' imgUrl={webPalette} title='aide' />
                    <CardItem alt='alt' imgUrl={webPalette} title='aide' />
                    <CardItem alt='alt' imgUrl={webPalette} title='aide' />
                </div>
            </section>
        </div>
    );
};

export default Services;
