/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import HeaderBar from '../components/HeaderBar';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  import('../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <HeaderBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
