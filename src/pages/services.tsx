import React from 'react';
import {
    faEdit,
    faKeyboard,
    faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { CardItem, Head, ServiceItem } from '../components/index';
import styles from '../styles/services.module.scss';
import * as Strings from '../strings';
import servicesBanner from '../../public/images/services-banner.svg';
import servicesFlyer from '../../public/images/services-flyer.svg';
import servicesHomePage from '../../public/images/services-home-page.svg';
import servicesLP from '../../public/images/services-lp.svg';
import servicesNameCard from '../../public/images/services-name-card.svg';
import servicesPackage from '../../public/images/services-package.svg';
import servicesResponsive from '../../public/images/services-responsive.svg';
import servicesSEO from '../../public/images/services-seo.svg';
import servicesWordPress from '../../public/images/services-word-press.svg';

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
            <section className={styles.services__list}>
                <h2 className={styles['services__sub-title']}>
                    {Strings.SERVICES_LIST_TITLE}
                </h2>
                <div className={styles['services__list--cards']}>
                    <CardItem
                        alt={Strings.SERVICES_ITEM_HP}
                        imgUrl={servicesHomePage}
                        title={Strings.SERVICES_ITEM_HP}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_LP}
                        imgUrl={servicesLP}
                        title={Strings.SERVICES_ITEM_LP}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_BANNER_DESIGN}
                        imgUrl={servicesBanner}
                        title={Strings.SERVICES_ITEM_BANNER_DESIGN}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_NAME_CARD_DESIGN}
                        imgUrl={servicesNameCard}
                        title={Strings.SERVICES_ITEM_NAME_CARD_DESIGN}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_FLYER_DESIGN}
                        imgUrl={servicesFlyer}
                        title={Strings.SERVICES_ITEM_FLYER_DESIGN}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_PACKAGE_DESIGN}
                        imgUrl={servicesPackage}
                        title={Strings.SERVICES_ITEM_PACKAGE_DESIGN}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_RESPONSIVE}
                        imgUrl={servicesResponsive}
                        title={Strings.SERVICES_ITEM_RESPONSIVE}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_WORD_PRESS}
                        imgUrl={servicesWordPress}
                        title={Strings.SERVICES_ITEM_WORD_PRESS}
                    />
                    <CardItem
                        alt={Strings.SERVICES_ITEM_SEO}
                        imgUrl={servicesSEO}
                        title={Strings.SERVICES_ITEM_SEO}
                    />
                </div>
            </section>
            <p className={styles.services__price}>{Strings.SERVICES_PRICE}</p>
        </div>
    );
};

export default Services;
