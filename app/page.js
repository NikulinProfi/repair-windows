import Head from 'next/head';
import Header from './components/Header';
import CTA from './components/CTA';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
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
        <CTA />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}