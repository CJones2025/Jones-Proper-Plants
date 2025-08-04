import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items yet.</p>}
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
