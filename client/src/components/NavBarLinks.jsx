import { NavLink } from 'react-router-dom';

export default function NavBarLinks(props) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) => (isActive ? 'text-[#C92071] underline underline-offset-4' : '')}
    >
      {props.title}
    </NavLink>
  );
}
