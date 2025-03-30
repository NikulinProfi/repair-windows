// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/services">Услуги</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;