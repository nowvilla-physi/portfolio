import React from 'react';
import { Head, WorkItem } from '../components/index';
import styles from '../styles/works.module.scss';
import * as Strings from '../strings';
import aquariumSite from '../../public/images/works-aquarium-site.png';
import blandSite from '../../public/images/works-bland-site.png';
import blogSite from '../../public/images/works-blog-site.png';
import dentalSite from '../../public/images/works-dental-site.png';
import fireworkSite from '../../public/images/works-firework-site.png';
import mediaSite from '../../public/images/works-media-site.png';
import petShop from '../../public/images/works-pet-shop.png';
import photoSite from '../../public/images/works-photo-site.png';
import photo2Site from '../../public/images/works-photo-site2.png';
import portfolioSite from '../../public/images/works-portfolio-site.png';
import profileSite from '../../public/images/works-profile-site.png';
import recipeSite from '../../public/images/works-recipe-site.png';
import recipe2Site from '../../public/images/works-recipe-site2.png';
import storeSite from '../../public/images/works-store-site.png';
import store2Site from '../../public/images/works-store-site2.png';
import store3Site from '../../public/images/works-store-site3.png';
import muSelfNameCard from '../../public/images/works-name-card-myself.png';
import designerNameCard from '../../public/images/works-name-card-designer.png';
import companyNameCard from '../../public/images/works-name-card-company.png';
import bookNameCard from '../../public/images/works-name-card-book.png';
import reactiveFinger from '../../public/images/works-reactive-finger.png';
import webPalette from '../../public/images/works-web-palette.png';
import { WORKS_NAME_CARD_BOOK } from '../strings';

const Works: React.VFC = () => {
    return (
        <div className={styles.works}>
            <Head
                title="Tomoki's Portfolio | Works"
                url='https://portfolio-tomoki.vercel.app/works'
            />
            <h2 className={styles.works__title} />
            <h3 className={styles['works__sub-title']}>
                {Strings.WORKS_HP_SUB_TITLE}
            </h3>
            <div className={styles.works__container}>
                <WorkItem
                    imgUrl={profileSite}
                    siteSummary={Strings.WORKS_PROFILE_SITE}
                />
                <WorkItem
                    imgUrl={photoSite}
                    siteSummary={Strings.WORKS_PHOTO1_SITE}
                />
                <WorkItem
                    imgUrl={photo2Site}
                    siteSummary={Strings.WORKS_PHOTO2_SITE}
                />
                <WorkItem
                    imgUrl={recipeSite}
                    siteSummary={Strings.WORKS_RECIPE_SITE}
                />
                <WorkItem
                    imgUrl={recipe2Site}
                    siteSummary={Strings.WORKS_RECIPE_COOKING_SITE}
                />
                <WorkItem
                    imgUrl={blandSite}
                    siteSummary={Strings.WORKS_BRAND_SITE}
                />
                <WorkItem
                    imgUrl={portfolioSite}
                    siteSummary={Strings.WORKS_PORTFOLIO_SITE}
                />
                <WorkItem
                    imgUrl={storeSite}
                    siteSummary={Strings.WORKS_STORE_BOOK_SITE}
                />
                <WorkItem
                    imgUrl={store2Site}
                    siteSummary={Strings.WORKS_STORE_CAFE_SITE}
                />
                <WorkItem
                    imgUrl={store3Site}
                    siteSummary={Strings.WORKS_STORE_FURNITURE_SITE}
                />
                <WorkItem
                    imgUrl={blogSite}
                    siteSummary={Strings.WORKS_BLOG_SITE}
                />
                <WorkItem
                    imgUrl={mediaSite}
                    siteSummary={Strings.WORKS_MEDIA_SITE}
                />
                <WorkItem
                    imgUrl={dentalSite}
                    siteSummary={Strings.WORKS_DENTAL_CLINIC_SITE}
                />
                <WorkItem
                    imgUrl={aquariumSite}
                    siteSummary={Strings.WORKS_HOSHIKAKE_AQUARIUM_SITE}
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
            </div>
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
        </div>
    );
};

export default Works;
