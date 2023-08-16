import { NavLink } from 'react-router-dom';

export default function NavBarLinks(props) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'text-[#C92071] underline underline-offset-4' : ''
      }
    >
      {props.title}
    </NavLink>
  );
}
