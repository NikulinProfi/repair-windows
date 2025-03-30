import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PlasticWindows() {
  return (
    <div>
      <Head>
        <title>Пластиковые окна - ОКНАРИУМ</title>
        <meta name="description" content="Профессиональный ремонт пластиковых окон в Москве и области." />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Пластиковые окна</h1>
        <p>Информация о пластиковых окнах...</p>
      </div>
      <Footer />
    </div>
  );
}