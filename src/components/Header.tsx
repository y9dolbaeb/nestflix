import Link from "next/link";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-black/75 backdrop-blur-sm flex justify-between items-center w-full px-6 bg-black fixed  top-0 z-10">
      <a href="./">
        <img src="/logo.png" alt="Logo" className="w-36" />
      </a>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Нүүр хуудас
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Кино сан
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              ТВ Шоу
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Миний жагсаалт
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
