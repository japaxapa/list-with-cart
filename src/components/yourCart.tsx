import { useCart } from "../context/shoppingCart.context";
import { EmptyCart } from "./emptyCart";
import { FilledCart } from "./filledCart";

export function YourCart() {
  const { getTotal } = useCart();
  return (
    <div className="p-6 bg-white mt-6 rounded-lg xl:mt-0">
      <h1 className="text-rose-600 font-bold text-2xl">
        Your Cart ({getTotal()})
      </h1>
      {getTotal() === 0 ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}
