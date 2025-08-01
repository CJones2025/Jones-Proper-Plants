export default function CartItem({ item, incrementQuantity, decrementQuantity }) {
  return (
    <li>
      <span>
        {item.image} {item.name}
      </span>
      <div>
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
      </div>
    </li>
  );
}