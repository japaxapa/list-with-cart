import { useEffect } from "react";
import { useCart } from "../context/shoppingCart.context";
import { ModalInfo } from "./modalInfo";

export function Modal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { clearData } = useCart();
  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-full  xl:w-3/12 max-h-full overflow-y-auto">
        <img
          src="/images/icon-order-confirmed.svg"
          alt="confirm icon"
          className="my-6"
        />
        <h2 className="text-4xl font-bold w-6/12 my-4">Order Confirmed</h2>
        <p className="mt-2 font-light">We hope you enjoy your food!</p>
        <ModalInfo />
        <button
          id="closeModal"
          className="w-full p-4 bg-rose-500 text-white mt-6 rounded-full text-center hover:bg-rose-700 hover:cursor-pointer"
          onClick={() => {
            clearData();
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
