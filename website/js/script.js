let nome = document.getElementById("nome");
let sexo = document.getElementById("sexo");
let data_nasc = document.getElementById("data_nasc");
let celular = document.getElementById("celular");
let rua = document.getElementById("rua");
let numero = document.getElementById("numero");
let cep = document.getElementById("cep");
let bairro = document.getElementById("bairro");
const form = document.getElementById("formulario");
let informacoes = document.getElementById("informacoes");

function exibirDados() {
    informacoes.innerHTML = `<p id="informacoes_cadastro">
        Nome: ${nome.value}
        <br/>
        Sexo: ${sexo.value}
        <br/>
        Data de nascimento: ${data_nasc.value}
        <br/>
        Celular: ${celular.value}
        <br/>
        Endereço: ${rua.value}, n॰ ${numero.value}
        <br/>
        CEP: ${cep.value} - Bairro: ${bairro.value}
        <br/>
    </p>`;
}

function limparDados() {
    nome.value = "";
    sexo.value = "";
    data_nasc.value = "";
    celular.value = "";
    rua.value = "";
    numero.value = "";
    cep.value = "";
    bairro.value = "";
}

form.addEventListener("submit", e => {
    e.preventDefault();
});