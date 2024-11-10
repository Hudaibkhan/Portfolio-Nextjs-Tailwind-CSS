"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white flex justify-between h-[60px] bg-black items-center px-4 py-0">
      <div className="w-1/2 pl-[10px] font-[cursive] text-[24px] font-bold">
        <Link href="/">Portfolio</Link>
      </div>
      <button
        className="block text-[1.5rem] bg-none border-none text-white cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav
        className={`w-[18%] right-0 absolute top-[60px] ${
          isMenuOpen ? 'block' : 'hidden'
        } md:w-1/2 md:block md:top-4`}
      >
        <ul className="md:flex-row flex justify-around gap-2 flex-col w-1/2 md:w-full">
          <li className="font-bold list-none hover:underline hover:decoration-[3px] text-center">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold list-none hover:underline hover:decoration-[3px] text-center">
            <Link href="/about">About</Link>
          </li>
          <li className="font-bold list-none hover:underline hover:decoration-[3px] text-center">
            <Link href="/project">Project</Link>
          </li>
          <li className="font-bold list-none hover:underline hover:decoration-[3px] text-center">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

