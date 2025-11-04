import React, { useState } from "react";

function App() {
    const [Jogador1, setJogador1] = useState(0);
    const [Jogador2, setJogador2] = useState(0);

    const PontoJ1 = () => setJogador1(Jogador1 + 1);
    const PontoJ2 = () => setJogador2(Jogador2 + 1);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h2>Painel de Pontuação</h2>
            <p>1º jogador: {Jogador1} pontos</p>
            <button onClick={PontoJ1}>+1 Jogador 1</button>

            <p>2º jogador: {Jogador2} pontos</p>
            <button onClick={PontoJ2}>+1 Jogador 2</button>


        </div>
    );
}
export default App; 