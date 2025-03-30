import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WoodenWindows() {
  return (
    <div>
      <Head>
        <title>Деревянные окна - ОКНАРИУМ</title>
        <meta name="description" content="Профессиональный ремонт деревянных окон в Москве и области." />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Деревянные окна</h1>
        <p>Информация о деревянных окнах...</p>
      </div>
      <Footer />
    </div>
  );
}