const botaoHabilidades = document.getElementById("verHabilidades");
const botaoProjetos = document.getElementById("verProjetos");
const botaoContato = document.getElementById("verContato");

const infos = document.getElementById("infos");
const habilidades = document.getElementById("habilidades");
const projetos = document.getElementById("projetos");
const contato = document.getElementById("contato");

let habilidadesAberto = false;
let projetosAberto = false;
let contatoAberto = false;

botaoHabilidades.addEventListener("click", () => {
    if (projetosAberto) {
        projetos.classList.remove("visivel");
        projetosAberto = false;
    }
    if (contatoAberto) {
        contato.classList.remove("visivel");
        contatoAberto = false;
    }

    habilidadesAberto = !habilidadesAberto;

    if (habilidadesAberto) {
        infos.classList.add("reduzida");
        habilidades.classList.add("visivel");
    } else {
        infos.classList.remove("reduzida");
        habilidades.classList.remove("visivel");
    }
});

botaoProjetos.addEventListener("click", () => {
    if (habilidadesAberto) {
        habilidades.classList.remove("visivel");
        habilidadesAberto = false;
    }
    if (contatoAberto) {
        contato.classList.remove("visivel");
        contatoAberto = false;
    }

    projetosAberto = !projetosAberto;

    if (projetosAberto) {
        infos.classList.add("reduzida");
        projetos.classList.add("visivel");
    } else {
        infos.classList.remove("reduzida");
        projetos.classList.remove("visivel");
    }
});

botaoContato.addEventListener("click", () => {
    if (habilidadesAberto) {
        habilidades.classList.remove("visivel");
        habilidadesAberto = false;
    }
    if (projetosAberto) {
        projetos.classList.remove("visivel");
        projetosAberto = false;
    }

    contatoAberto = !contatoAberto;

    if (contatoAberto) {
        infos.classList.add("reduzida");
        contato.classList.add("visivel");
    } else {
        infos.classList.remove("reduzida");
        contato.classList.remove("visivel");
    }
});
