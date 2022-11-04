import type { AppProps } from 'next/app';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  import('../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
