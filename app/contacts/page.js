import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Контакты - ОКНАРИУМ</title>
        <meta name="description" content="Контактная информация компании ОКНАРИУМ." />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Контакты</h1>
        <p>Телефон: +7 (XXX) XXX-XX-XX</p>
        <p>WhatsApp / Telegram: <a href="#" className="text-blue-600">Связаться</a></p>
      </div>
      <Footer />
    </div>
  );
}