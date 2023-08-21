import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { cardsInfo } from '../utils/cardsMock';

export default function Cards() {
  const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
  const [arraysFiltrados, setArraysFiltrados] = useState([]);

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

  useEffect(() => {
    const arrayFiltrado = filtrarPorMarcas(marcasSelecionadas, cardsInfo);
    if (marcasSelecionadas.length > 0) {
      return setArraysFiltrados(arrayFiltrado);
    } else {
      return setArraysFiltrados(cardsInfo);
    }
  }, [marcasSelecionadas]);

  return (
    <>
      <div className="flex gap-3">
        <input type="checkbox" name="marca" value="adidas" onChange={handleCheckboxChange} />
        <label>Adidas</label>
        <input type="checkbox" name="marca" value="nike" onChange={handleCheckboxChange} />
        <label>Nike</label>
        <input type="checkbox" name="marca" value="k-swiss" onChange={handleCheckboxChange} />
        <label>K-Swiss</label>
      </div>
      <div className="w-full grid gap-x-4 gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {arraysFiltrados.map((card) => {
          return (
            <Card
              key={card.id}
              discountPercentual={card.discountPercentual}
              category={card.category}
              productName={card.productName}
              discountPrice={card.discountPrice}
              price={card.price}
              isDiscount={card.isDiscount}
              url={card.url}
            />
          );
        })}
      </div>
    </>
  );
}
