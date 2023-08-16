import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'text-[#C92071] underline underline-offset-4' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/produto"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'text-[#C92071] underline underline-offset-4' : ''
        }
      >
        Produto
      </NavLink>
      <NavLink
        to="/contato"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'text-[#C92071] underline underline-offset-4' : ''
        }
      >
        Contato
      </NavLink>
    </nav>
  );
}
