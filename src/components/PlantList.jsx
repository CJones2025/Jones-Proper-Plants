import PlantCard from "./PlantCard";
import PLANTS from "../data.js";

export default function PlantList() {
  return (
    <div className="plant-list">
      {PLANTS.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
