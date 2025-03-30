import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>ОКНАРИУМ – Окна без проблем!</title>
        <meta name="description" content="Профессиональный ремонт окон в Москве и области. Высокое качество и гарантия." />
        <meta name="keywords" content="ремонт окон, Москва, Московская область, окна, ремонт" />
        <meta property="og:title" content="ОКНАРИУМ – Окна без проблем!" />
        <meta property="og:description" content="Профессиональный ремонт окон в Москве и области. Высокое качество и гарантия." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-project-name.vercel.app" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <h1 className="text-3xl font-bold my-5">Добро пожаловать на ОКНАРИУМ!</h1>
        <p className="my-5">Выберите тип окон, которые вас интересуют:</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/plastic-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            <span className="cursor-pointer">Пластиковые окна</span>
          </Link>
          <Link href="/wooden-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            <span className="cursor-pointer">Деревянные окна</span>
          </Link>
          <Link href="/aluminum-windows" className="bg-blue-500 text-white px-4 py-2 rounded">
            <span className="cursor-pointer">Алюминиевые окна</span>
          </Link>
          <Link href="/contacts" className="bg-blue-500 text-white px-4 py-2 rounded">
            <span className="cursor-pointer">Контакты</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}