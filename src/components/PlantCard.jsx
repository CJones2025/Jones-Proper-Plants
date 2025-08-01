export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <span className="plant-image">{plant.image}</span>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}