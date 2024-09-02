import { useCart } from "../context/shoppingCart.context";

interface ButtonProps {
  itemId: string;
  value: number;
  name: string;
}

export const AddCartBtn: React.FC<ButtonProps> = ({ itemId, value, name }) => {
  const { cart, addItem, removeItem, increaseQuantity, decreaseQuantity } =
    useCart();
  const item = cart.find((item) => item.id === itemId);

  return (
    <div className="flex items-center absolute bottom-0 hover:cursor-pointer">
      {item ? (
        <div className="bg-rose-600 flex text-white px-3 py-3 rounded-full">
          <button
            onClick={() => {
              decreaseQuantity(itemId);
              if (item.quantity === 1) removeItem(itemId);
            }}
            className="border-2 border-white p-1 rounded-full hover:border-rose-700 hover:bg-white group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path
                fill="currentColor"
                className="w-6 h-6 text-white group-hover:text-rose-700"
                d="M0 .375h10v1.25H0V.375Z"
              />
            </svg>
          </button>
          <span className="px-10">{item.quantity}</span>
          <button
            onClick={() => {
              increaseQuantity(itemId);
            }}
            className="border-2 border-white p-1 rounded-full hover:border-rose-700 hover:bg-white group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="currentColor"
                className="w-6 h-6 text-white group-hover:text-rose-700"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div
          onClick={() => addItem(itemId, value, name)}
          className="flex bg-white border-2 border-rose-700 items-center px-6 py-2 rounded-full group hover:border-rose-600"
        >
          <img
            src="/images/icon-add-to-cart.svg"
            alt="add to cart"
            className="w-4 h-4 mr-2"
          />
          <span className="font-semibold text-rose-900 group-hover:text-rose-700">
            Add to Cart
          </span>
        </div>
      )}
    </div>
  );
};
