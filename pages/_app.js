import Layout from '@/components/layout';
import '@/styles/globals.css';
import React, { useRef } from 'react';

export default function App({ Component, pageProps }) {
  const inputRef = useRef(null);

  return (
    <Layout>
      <Component {...pageProps} inputRef={inputRef} />
    </Layout>
  );
}
