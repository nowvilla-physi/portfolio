import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BottomNavigation, Header, Footer } from '../components/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='app'>
            <NextProgress
                color='#61dafb'
                options={{ easing: 'ease', speed: 500 }}
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
