import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white text-center py-5 text-2xl">
      <Link href="/">
        ОКНАРИУМ – Окна без проблем!
      </Link>
    </header>
  );
};

export default Header;