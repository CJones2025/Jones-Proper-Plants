import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./components/PlantList.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === plant.id);
      if (found) {
        return prevCart.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(id) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  return (
    <main>
      <h1>Proper Plants</h1>
      <div className="main-content">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cartItems={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
    </main>
  );
}
