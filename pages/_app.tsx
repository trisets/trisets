/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import HeaderBar from '../components/HeaderBar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <HeaderBar/>
    <Component {...pageProps} />
  
  </div>
);

export default MyApp;
