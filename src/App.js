import "./App.css";
import CardFinal from "./components/Card/Card";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-xl font-bold text-green-600">MERN App</h1>
      <CardFinal />
      <Contact />
    </div>
  );
}

export default App;
