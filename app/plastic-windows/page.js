import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PlasticWindows() {
  return (
    <div>
      <Head>
        <title>Пластиковые окна - ОКНАРИУМ</title>
        <meta name="description" content="Профессиональный ремонт пластиковых окон в Москве и области." />
        <meta name="keywords" content="пластиковые окна, ремонт окон, Москва, Московская область" />
        <meta property="og:title" content="Пластиковые окна - ОКНАРИУМ" />
        <meta property="og:description" content="Профессиональный ремонт пластиковых окон в Москве и области." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://repair-windows.vercel.app/plastic-windows" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Пластиковые окна</h1>
        <p className="my-5">Информация о пластиковых окнах...</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Заказать</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Подробнее</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}