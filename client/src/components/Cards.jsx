import Card from '../components/Card';
import { cardsInfo } from '../utils/cardsMock';
export default function Cards() {
  return (
    <>
      <div className="w-full grid gap-x-4 gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {cardsInfo.map((card) => {
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
