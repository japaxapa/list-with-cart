import { useCart } from "../context/shoppingCart.context";

export function ConfirmBtn() {
  const { changeState } = useCart();
  return (
    <div
      className="w-full p-4 bg-rose-500 text-white mt-6 rounded-full text-center hover:bg-rose-700 hover:cursor-pointer"
      onClick={() => changeState()}
    >
      Confirm Order
    </div>
  );
}
