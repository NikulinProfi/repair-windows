import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AluminumWindows() {
  return (
    <div>
      <Head>
        <title>Алюминиевые окна - ОКНАРИУМ</title>
        <meta name="description" content="Профессиональный ремонт алюминиевых окон в Москве и области." />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Алюминиевые окна</h1>
        <p>Информация об алюминиевых окнах...</p>
      </div>
      <Footer />
    </div>
  );
}