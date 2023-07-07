import '@/styles/globals.css';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
