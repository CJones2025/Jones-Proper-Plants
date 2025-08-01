import CartItem from "./CartItem.jsx";

export default function Cart({ cartItems, incrementQuantity, decrementQuantity }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          ))}
        </ul>
      )}
    </section>
  );
}