import Layout from '@/components/layout';
import '@/styles/globals.css';
import React, { useRef } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
