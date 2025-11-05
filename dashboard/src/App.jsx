import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Card
          titulo="Usuarios"
          numero="120"
          descricao="Vendas realizadas"
        />
      <Footer />
      </div>
    </div>
  );
}
export default App;

