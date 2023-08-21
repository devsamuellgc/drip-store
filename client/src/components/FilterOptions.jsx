import { useState } from 'react';
import { cardsInfo } from '../utils/cardsMock';

export default function FilterOption() {
  function filtrarPorMarcas(marcasSelecionadas, array) {
    const resultado = array.filter((item) => marcasSelecionadas.includes(item.marca));
    return resultado;
  }

  function handleCheckboxChange(e) {
    const marcaSelecionada = e.target.value;
    setMarcasSelecionadas((prevMarcas) => {
      if (prevMarcas.includes(marcaSelecionada)) {
        return prevMarcas.filter((marca) => marca !== marcaSelecionada);
      } else {
        return [...prevMarcas, marcaSelecionada];
      }
    });
  }

  const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
  const arrayFiltrado = filtrarPorMarcas(marcasSelecionadas, cardsInfo);

  return (
    <div>
      <input type="checkbox" name="marca" value="adidas" onChange={handleCheckboxChange} />
      <label>Adidas</label>
      <input type="checkbox" name="marca" value="nike" onChange={handleCheckboxChange} />
      <label>Nike</label>
      <input type="checkbox" name="marca" value="k-swiss" onChange={handleCheckboxChange} />
      <label>K-Swiss</label>
      {arrayFiltrado.map((item) => {
        return <p key={item.productName}>{item.productName}</p>;
      })}
    </div>
  );
}
