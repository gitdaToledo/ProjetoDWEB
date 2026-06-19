//Menu 

const abrirMenu = document.querySelector("#abrirMenu"); //#abrirMenu - index | #btnMenu - outras páginas 
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");

abrirMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("ativo");
    overlay.classList.remove("ativo");
});

//animação carregamento

const start = document.querySelector("#start");
const loading = document.querySelector("#loading");
const progresso = document.querySelector("#progresso");

start.addEventListener("click", (evento) => {

    evento.preventDefault();

    loading.style.display = "flex";

    let porcentagem = 0;

    let carregando = setInterval(() => {

        porcentagem++;

        progresso.style.width = porcentagem + "%";

        if (porcentagem >= 100) {

            clearInterval(carregando);

            window.location.href = "PaginaInicial.html";

        }

    }, 30);

});