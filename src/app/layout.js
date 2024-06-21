'use client';
import Head from 'next/head';
import Header from '@/layouts/Header'; // Adjust the import path based on your project structure
import '@/layouts/Header'; // Adjust the import path based on your project structure
import "../sass/globals.scss"; 
import { CartProvider } from '../context/cartContext';
 

const metadata = {
  title: 'Switchive',
  description: 'Switchive is a Crypto E-Commerce platform where you can make mobile top-ups, purchase gift cards and pay bills with crypto for more than 5,000 products in over 170 countries and earn points.',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        link


        {/* Add more meta tags as needed for SEO */}
      </Head>
      <body>
        <CartProvider>
        <Header />
        {children}
      </CartProvider>
       
      </body>
    </html>
  );
};

export default RootLayout;
