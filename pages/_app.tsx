import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
