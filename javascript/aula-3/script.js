const titulo = document.getElementById("titulo");
const paragrafo = document.querySelector("p");

function darkMode() {
    document.body.style.backgroundColor = "black";
    // alterar cor do h1 e do p
    titulo.style.color = "white";
    paragrafo.style.color = "white";

    return titulo.innerHTML = "Novo título";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    // alterar cor do h1 e do p
    titulo.style.color = "black";
    paragrafo.style.color = "black";

    return titulo.innerHTML = "Novo título";
}
