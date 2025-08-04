import { useCart } from "../context/CartContext";

export default function PlantCard({ plant }) {
  const { addToCart } = useCart();

  return (
    <div className="plant-card">
      <div className="plant-img">{plant.image}</div>
      <div className="plant-name">{plant.name}</div>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}
