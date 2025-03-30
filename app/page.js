import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ОКНАРИУМ – Окна без проблем!</title>
        <meta name="description" content="Профессиональный ремонт окон в Москве и области. Высокое качество и гарантия." />
        <meta name="keywords" content="ремонт окон, Москва, Московская область, окна, ремонт" />
      </Head>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Добро пожаловать на ОКНАРИУМ!</h1>
        <p className="my-5">Выберите тип окон, которые вас интересуют:</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/plastic-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            Пластиковые окна
          </Link>
          <Link href="/wooden-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            Деревянные окна
          </Link>
          <Link href="/aluminum-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            Алюминиевые окна
          </Link>
          <Link href="/contacts" className="bg-blue-500 text-white px-4 py-2 rounded">
            Контакты
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}