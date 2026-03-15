import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      try {
        const stored = localStorage.getItem("digitalstore_cart");
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
  );

  useEffect(() => {
    localStorage.setItem("digitalstore_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
