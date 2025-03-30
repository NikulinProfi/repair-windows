import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <div>
      <Head>
        <title>Услуги - Ремонт окон</title>
        <meta name="description" content="Наши услуги по ремонту окон в Москве и Московской области." />
      </Head>
      <Header />
      <main>
        <h1>Наши услуги</h1>
        <p>Мы предлагаем широкий спектр услуг по ремонту окон.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Services;