import Head from 'next/head';
import {siteTitle, description} from '../lib/constants';

export default function HomeHead() {
  // Facebook's Open Graph Meta Tags
  // Twitter's Card
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={`siteTitle`} />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
