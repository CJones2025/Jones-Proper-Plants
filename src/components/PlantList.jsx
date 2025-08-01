import PlantCard from "./PlantCard.jsx";

export default function PlantList({ plants, addToCart }) {
  return (
    <section className="plant-grid">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </section>
  );
}