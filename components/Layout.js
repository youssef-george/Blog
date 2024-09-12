// components/Layout.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Website</title>
        <meta name="description" content="A simple blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
