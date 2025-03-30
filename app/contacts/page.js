import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Контакты - ОКНАРИУМ</title>
        <meta name="description" content="Контактная информация компании ОКНАРИУМ." />
        <meta name="keywords" content="контакты, ОКНАРИУМ, Москва, Московская область" />
        <meta property="og:title" content="Контакты - ОКНАРИУМ" />
        <meta property="og:description" content="Контактная информация компании ОКНАРИУМ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://repair-windows.vercel.app/contacts" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Контакты</h1>
        <p className="my-5">Телефон: +7 (XXX) XXX-XX-XX</p>
        <p className="my-5">WhatsApp / Telegram: <a href="#" className="text-blue-600">Связаться</a></p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Заказать звонок</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Написать сообщение</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}