import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  value: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addItem: (id: string, value: number, name: string) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getTotal: () => number;
  getTotalvalue: () => number;
  clearData: () => void;

  isOpen: Boolean;
  changeState: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (id: string, value: number, name: string) => {
    setCart((prevCart) => [...prevCart, { id, quantity: 1, value, name }]);
  };

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity));

    return total;
  };

  const getTotalvalue = () => {
    let totalvalue = 0;
    cart.forEach((item) => (totalvalue += item.quantity * item.value));

    return totalvalue;
  };

  const clearData = () => {
    setCart([]);
    setIsOpen(false);
  }

  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        getTotal,
        getTotalvalue,
        clearData,
        isOpen,
        changeState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
