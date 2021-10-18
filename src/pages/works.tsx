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
import photoSite from '../../public/images/works-photo-site.png';
import photo2Site from '../../public/images/works-photo-site2.png';
import portfolioSite from '../../public/images/works-portfolio-site.png';
import profileSite from '../../public/images/works-profile-site.png';
import recipeSite from '../../public/images/works-recipe-site.png';
import recipe2Site from '../../public/images/works-recipe-site2.png';
import storeSite from '../../public/images/works-store-site.png';
import store2Site from '../../public/images/works-store-site2.png';
import store3Site from '../../public/images/works-store-site3.png';

const Works: React.VFC = () => {
    return (
        <div className={styles.works}>
            <Head
                title="Tomoki's Portfolio | Works"
                url='https://portfolio-tomoki.vercel.app/works'
            />
            <h2 className={styles.works__title} />
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
                />
            </div>
        </div>
    );
};

export default Works;
