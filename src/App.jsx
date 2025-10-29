import Saudacao from "./saudacao";
const curso = "Desenvolvimento Front-End";
const turma = "React - Aula 1";

function App() {
  return (
    <div>
      <h1>Bem-vindos ao curso de {curso}</h1>
      <p>Turma: {turma}</p>
      <Saudacao nome="Petrus"/>
      <button> aqui</button>
    </div>
  );
}
export default App;