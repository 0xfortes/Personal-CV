import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 py-6 bg-transparent z-50">
      <nav className="container mx-auto px-4 flex justify-end items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
        <div className={`absolute top-full right-0 bg-black bg-opacity-80 backdrop-blur-md w-full sm:w-64 py-4 ${isOpen ? 'block' : 'hidden'}`}>
          <ul>
            <li>
              <Link href="/" className="block px-4 py-2 text-lg font-semibold hover:bg-gray-800 transition-colors">
                home
              </Link>
            </li>
            <li>
              <Link href="#about" className="block px-4 py-2 text-lg font-semibold hover:bg-gray-800 transition-colors">
                about
              </Link>
            </li>
            <li>
              <Link href="#projects" className="block px-4 py-2 text-lg font-semibold hover:bg-gray-800 transition-colors">
                projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block px-4 py-2 text-lg font-semibold hover:bg-gray-800 transition-colors">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;