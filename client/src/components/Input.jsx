export default function Input(props) {
  return (
    <input
      type={props.type}
      className={`
            w-36 
            h-10 
            outline-none 
            px-3 
            rounded 
            bg-white 
            border-none 
            ${props.style}
        `}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      id={props.id}
    />
  );
}
