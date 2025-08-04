import PlantList from "./components/PlantList";
import Cart from "./components/Cart";


export default function App() {
  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <div className="content">
        <PlantList />
        <Cart />
      </div>
    </div>
  );
}
