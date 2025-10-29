import React, { useState } from "react";
import PainelAluno from "./PainelAluno";

function App() {
  const [pontos, setPontos] = useState(0);
  const [nome] = useState("Petrus");
  const [curso] = useState("Front-End");

  const aumentarPontos = () => {
    setPontos((prev) => prev + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sistema de Pontuação</h1>
      <PainelAluno nome={nome} curso={curso} pontos={pontos}/>
      <button onClick={aumentarPontos}>Adicionar</button>
    </div>
  );
}
export default App;