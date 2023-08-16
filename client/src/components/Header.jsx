import { NavLink } from 'react-router-dom';
import burgerMenu from '../assets/images/Menu.svg';
import { useState } from 'react';
import NavBarLinks from './NavBarLinks';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav
      className={`${isOpenMenu && 'w-3/4 bg-white absolute top-0 left-0 bottom-0 z-50'} transition`}
    >
      <img
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="md:hidden"
        src={burgerMenu}
        alt="Burger menu icon"
      />
      <div className={`hidden md:flex gap-4`}>
        <NavBarLinks path="/" title="Home" />
        <NavBarLinks path="/produto" title="Produto" />
        <NavBarLinks path="/contato" title="Contato" />
      </div>
    </nav>
  );
}
