"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaPhone, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-5 flex flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Иконка сайта */}
          <img src="" alt="Site Icon" className="w-12 h-12 rounded-full" />
          <Link href="/">
            <span className="text-3xl font-bold cursor-pointer">ОКНАРИУМ</span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
            <FaPhone className="text-lg" />
          </button>
          {isMobile && (
            <button onClick={toggleMenu} className="flex items-center bg-gray-500 text-white px-2 py-1 rounded">
              <FaBars className="text-lg" />
            </button>
          )}
        </div>
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
      {!isMobile && (
        <nav className="bg-blue-500">
          <ul className="flex justify-center space-x-4 py-4">
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