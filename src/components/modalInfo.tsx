import { useCart } from "../context/shoppingCart.context";

export function ModalInfo() {
  const { cart, getTotalvalue } = useCart();
  return (
    <div className="w-full p-4 bg-rose-50 mt-6 rounded-lg">
      <div>
        {cart.map((item, index) => {
          const treatedId = item.id
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const joinedId = treatedId.split(" ").join("-");
          const imageURL = joinedId === "pie" ? "meringue" : joinedId;

          return (
            <div key={item.id + "-" + index}>
              <div className="flex items-center justify-between">
                <div className="w-2/12 h-2/12">
                  <img
                    src={`/images/image-${imageURL}-thumbnail.jpg`}
                    alt={`${item.id} picture`}
                  />
                </div>
                <div className="w-6/12">
                  <div className="truncate text-sm font-semibold">
                    {item.name}
                  </div>
                  <div>
                    <span className="text-rose-700 mr-5 text-sm">
                      {item.quantity}x
                    </span>
                    <span className="text-xs font-light">
                      @ ${item.value.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="w-2/12 h-2/12 font-semibold text-lg">
                  ${(item.quantity * item.value).toFixed(2)}
                </div>
              </div>
              <hr className="my-4" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <p className="font-bold text-2xl">${getTotalvalue().toFixed(2)}</p>
      </div>
    </div>
  );
}
