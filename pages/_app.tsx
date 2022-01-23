import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { firebaseConfig } from '../firebase';

function MyApp({ Component, pageProps }: AppProps) {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  return <Component {...pageProps} />
}

export default MyApp
