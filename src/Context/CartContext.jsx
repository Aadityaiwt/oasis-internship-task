import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getPizzaKey = (pizza) =>
    pizza._id != null ? String(pizza._id) : String(pizza.id ?? pizza.name);

  const addToCart = (pizza) => {
    setCartItems((currentItems) => {
      const pizzaKey = getPizzaKey(pizza);

      const existingItem = currentItems.find(
        (item) => getPizzaKey(item) === pizzaKey
      );

      if (existingItem) {
        return currentItems.map((item) =>
          getPizzaKey(item) === pizzaKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...pizza, quantity: 1 }];
    });
  };

  const decreaseQuantity = (pizza) => {
    const pizzaKey = getPizzaKey(pizza);

    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          getPizzaKey(item) === pizzaKey
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (pizza) => {
    const pizzaKey = getPizzaKey(pizza);

    setCartItems((currentItems) =>
      currentItems.filter((item) => getPizzaKey(item) !== pizzaKey)
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
    </>
  );
}

export function useCart() {
  return useContext(CartContext);
}
