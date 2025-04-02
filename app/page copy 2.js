import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

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
        <section className="text-center my-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Ремонт окон в Москве и МО – быстро, качественно, с гарантией!
        </h1>
          {/* Заглушка для формы */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <p>Форма временно недоступна. Пожалуйста, попробуйте позже.</p>
          </div>
          <div className="mt-5">
            <a href="https://wa.me/your-whatsapp-number" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              <FaWhatsapp className="inline-block mr-2" /> WhatsApp
            </a>
            <a href="https://t.me/your-telegram-username" className="bg-blue-500 text-white px-4 py-2 rounded">
              <FaTelegram className="inline-block mr-2" /> Telegram
            </a>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-bold mb-5 text-center">Основные преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="images/8bb5747a-567d-4889-b084-818bac735d56.png" alt="Выезд за 30 минут" className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Выезд за 30 минут</h3>
              <p>Наши мастера приедут к вам в течение 30 минут после заявки.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="images/ChatGPT Image 2 апр. 2025 г., 18_52_47.png" alt="Гарантия до 5 лет" className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Гарантия до 5 лет</h3>
              <p>Мы гарантируем качество наших услуг и материалов до 5 лет.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="images/ChatGPT Image 2 апр. 2025 г., 18_55_49.png" alt="Бесплатная диагностика" className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Бесплатная диагностика</h3>
              <p>Мы проведем бесплатную диагностику ваших окон без обязательств.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Качественные материалы" className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Качественные материалы</h3>
              <p>Мы используем только высококачественные материалы от проверенных поставщиков.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Профессиональные мастера" className="w-full h-auto rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Профессиональные мастера</h3>
              <p>Наши мастера имеют многолетний опыт и сертификаты.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-bold mb-5 text-center">Фото/видео работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Before and After 1" className="w-full h-auto rounded" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Before and After 2" className="w-full h-auto rounded" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Before and After 3" className="w-full h-auto rounded" />
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-bold mb-5 text-center">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Шаг 1</h3>
              <p>Вы оставляете заявку на сайте или звоните нам.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Шаг 2</h3>
              <p>Мы приезжаем к вам в течение 30 минут.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Шаг 3</h3>
              <p>Проводим диагностику и консультируем.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Шаг 4</h3>
              <p>Согласовываем работу и стоимость.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Шаг 5</h3>
              <p>Выполняем ремонт и гарантируем качество.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-bold mb-5 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Review 1" className="w-full h-auto rounded" />
              <p className="mt-2">Отличный сервис! Быстро и качественно.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Review 2" className="w-full h-auto rounded" />
              <p className="mt-2">Рекомендую всем! Гарантия на все работы.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="" alt="Review 3" className="w-full h-auto rounded" />
              <p className="mt-2">Профессиональные мастера, все сделали быстро.</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-bold mb-5 text-center">Калькулятор стоимости</h2>
          <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repair-type">
                Тип ремонта
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="repair-type"
              >
                <option value="plastic">Пластиковые окна</option>
                <option value="wooden">Деревянные окна</option>
                <option value="aluminum">Алюминиевые окна</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="window-count">
                Количество окон
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="window-count"
                type="number"
                placeholder="Количество окон"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Рассчитать
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}