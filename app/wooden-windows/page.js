import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WoodenWindows() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Деревянные окна - ОКНАРИУМ</title>
        <meta name="description" content="Профессиональный ремонт деревянных окон в Москве и области." />
        <meta name="keywords" content="деревянные окна, ремонт окон, Москва, Московская область" />
        <meta property="og:title" content="Деревянные окна - ОКНАРИУМ" />
        <meta property="og:description" content="Профессиональный ремонт деревянных окон в Москве и области." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-project-name.vercel.app/wooden-windows" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Деревянные окна</h1>
        <p className="my-5">Информация о деревянных окнах...</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Заказать</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Подробнее</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}