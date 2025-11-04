function Tela(props) {

    const temaClaro = {
        backgroundColor: "#e9e9e9ff",
        color: "#222",
        height: "100hv",
        paddingTop: "50px",
        transition: "0,3s",
    };

    const temaEscuro = {
        backgroundColor: "#222",
        color: "#ffffffff",
        height: "100hv",
        paddingTop: "50px",
        transition: "0,3s",
    };
    return (
        <div style={props.tema === "claro" ? temaClaro : temaEscuro}>
            <h1>Tema {props.tema === "claro" ? "Claro" : "Escuro"}</h1>
            {props.children}
        </div>
    );
}
export default Tela;




