import burgerMenu from '../assets/images/Menu.svg';
import logo from '../assets/images/logo.svg';
import carrinho from '../assets/images/carrinho.svg';
import { useState } from 'react';
import NavLinks from './NavLinks';
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className={`flex flex-col ${isOpenMenu && 'fixed top-0 left-0 right-0 z-50'}`}>
      <div className="flex justify-between items-center bg-white p-5">
        <img
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="md:hidden"
          src={burgerMenu}
          alt="Burger menu icon"
        />
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
          <p className="text-xl font-semibold text-[#C92071]">Digital Store</p>
        </div>
        <div>
          <img src={carrinho} alt="Ícone carrinho" />
        </div>
      </div>
      <NavLinks isOpen={isOpenMenu} />
    </nav>
  );
}
