import React from 'react';
import { Head, WorkItem } from '../components/index';
import styles from '../styles/works.module.scss';
import * as Strings from '../strings';
import dentalSite from '../../public/images/works-dental-site.png';
import christmasSale from '../../public/images/works-banner-christmas-sale.png';
import winterSession from '../../public/images/works-banner-winter-session.png';
import moving from '../../public/images/works-banner-moving.png';
import fireworkSite from '../../public/images/works-firework-site.png';
import petShop from '../../public/images/works-pet-shop.png';
import muSelfNameCard from '../../public/images/works-name-card-myself.png';
import designerNameCard from '../../public/images/works-name-card-designer.png';
import companyNameCard from '../../public/images/works-name-card-company.png';
import bookNameCard from '../../public/images/works-name-card-book.png';
import hairdresserNameCard from '../../public/images/works-name-card-hairdresser.png';
import architectNameCard from '../../public/images/works-name-card-architect.png';
import dogTrainerNameCard from '../../public/images/works-name-card-dogtrainer.png';
import chemicalNameCard from '../../public/images/works-name-card-chemical.png';
import semiconductorNameCard from '../../public/images/works-name-card-semiconductor.png';
import reactiveFinger from '../../public/images/works-reactive-finger.png';
import webPalette from '../../public/images/works-web-palette.png';

const Works: React.VFC = () => {
    return (
        <div className={styles.works}>
            <Head
                title="Tomoki's Portfolio | Works"
                url='https://portfolio-tomoki.vercel.app/works'
            />
            <h2 className={styles.works__title} />
            <section>
                <h3 className={styles['works__sub-title']}>
                    {Strings.WORKS_HP_SUB_TITLE}
                </h3>
                <div className={styles.works__container}>
                    <WorkItem
                        imgUrl={dentalSite}
                        siteSummary={Strings.WORKS_DENTAL_CLINIC_SITE}
                        siteUrl={Strings.WORKS_DENTAL_SITE_URL}
                    />
                    <WorkItem
                        imgUrl={fireworkSite}
                        siteSummary={Strings.WORKS_HOSHIKAKE_FIREWORK_SITE}
                        siteUrl={Strings.WORKS_HOSHIKAKE_FIREWORK_SITE_URL}
                    />
                    <WorkItem
                        imgUrl={petShop}
                        siteSummary={Strings.WORKS_PET_SHOP_SITE}
                        siteUrl={Strings.WORKS_PET_SHOP_SITE_URL}
                    />
                </div>
            </section>
            <section>
                <h3 className={styles['works__sub-title']}>
                    {Strings.WORKS_BANNER_SUB_TITLE}
                </h3>
                <div className={styles.works__container}>
                    <WorkItem
                        imgUrl={christmasSale}
                        siteSummary={Strings.WORKS_BANNER_CHRISTMAS_SALE}
                        siteUrl={Strings.WORKS_BANNER_URL}
                    />
                    <WorkItem
                        imgUrl={winterSession}
                        siteSummary={Strings.WORKS_BANNER_WINTER_SESSION}
                        siteUrl={Strings.WORKS_BANNER_URL}
                    />
                    <WorkItem
                        imgUrl={moving}
                        siteSummary={Strings.WORKS_BANNER_MOVING}
                        siteUrl={Strings.WORKS_BANNER_URL}
                    />
                </div>
            </section>
            <section>
                <h3 className={styles['works__sub-title']}>
                    {Strings.WORKS_NAME_CARD_SUB_TITLE}
                </h3>
                <div className={styles.works__container}>
                    <WorkItem
                        imgUrl={muSelfNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_MYSELF}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={designerNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_DESIGNER}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={companyNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_COMPANY}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={bookNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_BOOK}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={hairdresserNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_HAIRDRESSER}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={architectNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_ARCHITECT}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={dogTrainerNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_DOG_TRAINER}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={chemicalNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_CHEMICAL}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                    <WorkItem
                        imgUrl={semiconductorNameCard}
                        siteSummary={Strings.WORKS_NAME_CARD_SEMICONDUCTOR}
                        siteUrl={Strings.WORKS_NAME_CARD_URL}
                    />
                </div>
            </section>
            <section>
                <h3 className={styles['works__sub-title']}>
                    {Strings.WORKS_WEB_APP_SUB_TITLE}
                </h3>
                <div className={styles.works__container}>
                    <WorkItem
                        imgUrl={reactiveFinger}
                        siteSummary={Strings.WORKS_REACTIVE_FINGER}
                        siteUrl={Strings.WORKS_REACTIVE_FINGER_URL}
                    />
                    <WorkItem
                        imgUrl={webPalette}
                        siteSummary={Strings.WORKS_WEB_PALETTE}
                        siteUrl={Strings.WORKS_WEB_PALETTE_URL}
                    />
                </div>
            </section>
        </div>
    );
};

export default Works;
