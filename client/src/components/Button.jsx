export default function Button(props) {
  return (
    <button
      className={`
            w-32 
            h-9 
            px-3 
            truncate 
            rounded 
            text-lg 
            font-semibold 
            ${props.color === 'red' && 'bg-red-600 text-white'}
            ${props.color === 'white' && 'bg-white text-black'}
            ${props.color === 'blue' && 'bg-blue-600 text-orange-300'}
            ${props.type === 'rounded' && 'rounded-full h-14 w-14'}
        `}
        src={props.src}
    >
      {props.title}
    </button>
  );
}
