import '../main.css';
import { store } from '@/stores';
import Head from 'next/head'
import favico from "../../public/images/favicon.ico";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <><Head>
      <link rel="shortcut icon" href={favico.src} type="image/x-icon" />
      <title>LegendPlex</title>
    </Head><Component {...pageProps} /></>
  )
}