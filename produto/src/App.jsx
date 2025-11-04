import Produto from './components/Produto'
import './App.css'


function App() {
  return (
    <div>
      <h2>Lista de Produtos</h2>

      <Produto
        nome="Arroz"
        preco="12 reais"
        descricao="feito de arroz"
      />

      <Produto
        nome="papel"
        preco="2 reais"
        descricao="feito de papel"
      />
      <Produto
        nome="bolo"
        preco="200 reais"
        descricao="feito de farinha, leite e ovo"
      />

    </div>
  );
}

export default App;
