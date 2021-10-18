import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { BottomNavigation, Header, Footer } from '../components/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='app'>
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
