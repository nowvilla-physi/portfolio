import React from 'react';
import Head from 'next/head';

type Props = {
    title: string;
    url: string;
};

const CustomHead: React.VFC<Props> = (props) => {
    const { title, url } = props;
    return (
        <Head>
            <meta
                name='description'
                content='Tomokiのポートフォリオです。React × Web制作を専門としています。お仕事のご連絡お待ちしております。'
            />
            <meta name='theme-color' content='#61dafb' />
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta property='og:title' content="Tomoki's Portfolio" />
            <meta
                property='og:description'
                content='Tomokiのポートフォリオです。React × Web制作を専門としています。お仕事のご連絡お待ちしております。'
            />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta
                property='og:image'
                content='../../public/images/turtle.jpg'
            />
            <meta property='og:site_name' content='Tomokiのポートフォリオ' />
            <meta property='og:locale' content='ja_JP' />
            <link rel='shortcut icon' href='../../public/favicon.ico' />
            <title>{title}</title>
        </Head>
    );
};

export default CustomHead;
