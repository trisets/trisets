import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  if (process.env.NODE_ENV === 'development') {
    import('../mocks');
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
};

export default MyApp;
