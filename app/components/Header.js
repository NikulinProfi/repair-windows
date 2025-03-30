"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">ОКНАРИУМ – Окна без проблем!</span>
        </Link>
        {isMobile && (
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        )}
        {!isMobile && (
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/plastic-windows">
                  <span className="hover:underline cursor-pointer">Пластиковые окна</span>
                </Link>
              </li>
              <li>
                <Link href="/wooden-windows">
                  <span className="hover:underline cursor-pointer">Деревянные окна</span>
                </Link>
              </li>
              <li>
                <Link href="/aluminum-windows">
                  <span className="hover:underline cursor-pointer">Алюминиевые окна</span>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <span className="hover:underline cursor-pointer">Контакты</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <nav className="bg-blue-500">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <Link href="/plastic-windows">
                <span className="hover:underline cursor-pointer">Пластиковые окна</span>
              </Link>
            </li>
            <li>
              <Link href="/wooden-windows">
                <span className="hover:underline cursor-pointer">Деревянные окна</span>
              </Link>
            </li>
            <li>
              <Link href="/aluminum-windows">
                <span className="hover:underline cursor-pointer">Алюминиевые окна</span>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <span className="hover:underline cursor-pointer">Контакты</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;