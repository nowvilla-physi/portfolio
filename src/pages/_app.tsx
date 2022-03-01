import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BottomNavigation, Header, Footer } from '../components/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='app'>
            <NextNProgress
                color='#61dafb'
                options={{ easing: 'ease', speed: 300 }}
                height={2}
            />
            <Header />
            <main className='wrapper'>
                <Component {...pageProps} />
            </main>
            <Footer />
            <BottomNavigation />
        </div>
    );
};

export default MyApp;
