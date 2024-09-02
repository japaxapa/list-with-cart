import { useCart } from "../context/shoppingCart.context";
import { CarbonNeutralCard } from "./carbonNeutral";
import { ConfirmBtn } from "./confirmBtn";

export function FilledCart() {
  const { cart, getTotalvalue, removeItem } = useCart();
  return (
    <div>
      <div className="2-10">
        {cart.map((item, index) => (
          <div key={item.name + "-" + index}>
            <div className="flex justify-between items-center my-4">
              <div>
                <h1 className="font-semibold text-rose-900 my-1">{item.id}</h1>

                <div>
                  <span className="text-rose-600 font-semibold">
                    {item.quantity}x
                  </span>
                  <span className="mx-3 text-rose-900 font-light">
                    @ ${item.value.toFixed(2)}
                  </span>
                  <span className="text-rose-900 font-semibold">
                    ${(item.value * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <div
                className="border-2 border-rose-800 rounded-full w-4 h-4 flex items-center justify-center hover:cursor-pointer hover:border-black group"
                onClick={() => removeItem(item.id)}
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
                    className="text-rose-800 group-hover:text-black"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center py-4">
        <span className="font-light my-4">Order Total</span>
        <span className="font-bold text-3xl">
          ${getTotalvalue().toFixed(2)}
        </span>
      </div>
      <CarbonNeutralCard />
      <ConfirmBtn />
    </div>
  );
}
