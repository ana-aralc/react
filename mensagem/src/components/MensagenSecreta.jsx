import React, { useState } from "react";

function MensagemSecreta() {
    const [mostrar, setmostrar] = useState(false);

    function alterarMensagem() {
        setmostrar(!mostrar);
    }
    return (
        <div style={{marginTop:"50px"}}>
            <h2>Mensagem Secreta</h2>
            <button onClick={alterarMensagem}>{mostrar ? "Esconder Mensagem":"Mostrar mensagem"}</button>

            {mostrar && <p>Essa mensagem é secreta</p>}

        </div>
    );
}
export default MensagemSecreta;