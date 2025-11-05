import { useState } from "react";

function FrasesMotivacionais() {
    const frases = [
        "Cada dia é uma nova oportunidade para brilhar.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Trabalho duro é inútil para aqueles que não acreditam em si mesmos."
    ];

    const [indice, setIndice] = useState(0);

    function Proxima() {
        setIndice((prev) => (prev + 1) % frases.length);
    }
    return (
        <div className="frases-container">
            <div className="card-frase">
                <p>
                    "{frases[indice]}"
                </p>
            </div>
            <button onClick={Proxima}>Próxima Frase</button>

        </div>
    );
}

export default FrasesMotivacionais;
