import NavBarLinks from './NavBarLinks';

export default function NavLinks(props) {
  return (
    <div
      className={`${
        props.isOpen && 'w-4/4 bg-[#00000050] absolute top-[73px] left-0 bottom-0 right-0 z-50'
      }`}
    >
      <div
        className={`hidden ${
          props.isOpen && '!flex flex-col w-3/4 bg-white absolute top-0 left-0 bottom-0 z-50'
        } md:flex gap-4`}
      >
        <NavBarLinks path="/" title="Home" />
        <NavBarLinks path="/produto" title="Produto" />
        <NavBarLinks path="/contato" title="Contato" />
      </div>
    </div>
  );
}
