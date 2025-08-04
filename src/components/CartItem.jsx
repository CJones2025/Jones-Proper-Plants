import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increment, decrement } = useCart();

  return (
    <div className="cart-item">
      <span className="cart-img">{item.image}</span>
      <span className="cart-name">{item.name}</span>
      <span className="cart-qty">Qty: {item.quantity}</span>
      <button onClick={() => decrement(item.id)}>-</button>
      <button onClick={() => increment(item.id)}>+</button>
    </div>
  );
}
