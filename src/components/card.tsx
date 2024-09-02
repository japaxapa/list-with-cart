import { DessertItem } from "../assets/desserts.mock";
import { useCart } from "../context/shoppingCart.context";
import useWindowDimensions from "../hook/useWindowDimension";
import { AddCartBtn } from "./AddBtn";

interface IProps {
  item: DessertItem;
}

export function Card({ item }: IProps) {
  const { imageURL, price, title, type } = item;

  const { cart } = useCart();
  const isSelected = cart.some((item) => item.id === type);

  const url = useWindowDimensions(imageURL);

  return (
    <div className="xl:w-full">
      <div className="relative flex justify-center">
        <div className="w-fit py-6">
          <img
            className={`w-full rounded-lg ${
              isSelected ? "border-2 border-rose-500" : ""
            }`}
            src={url}
            alt={`${type} image`}
          />
        </div>
        <AddCartBtn
          itemId={type}
          value={price}
          name={title}
          key={type + "-" + title}
        />
      </div>
      <div>
        <p className="text-base font-light text-rose-700 mt-2">{type}</p>
        <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
        <p className="text-lg font-semibold text-rose-600">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
