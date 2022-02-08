import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

import { SEO } from '@/configs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
