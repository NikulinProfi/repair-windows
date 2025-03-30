import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Контакты - Ремонт окон</title>
        <meta name="description" content="Свяжитесь с нами для получения консультации по ремонту окон." />
      </Head>
      <Header />
      <main>
        <h1>Контакты</h1>
        <p>Телефон: +7 (495) 123-45-67</p>
        <p>Email: info@repair-windows.ru</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;