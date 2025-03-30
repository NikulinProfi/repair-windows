// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ремонт окон в Москве и Московской области</title>
        <meta name="description" content="Профессиональный ремонт окон в Москве и Московской области. Высокое качество и гарантия." />
        <meta name="keywords" content="ремонт окон, Москва, Московская область, окна, ремонт" />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}