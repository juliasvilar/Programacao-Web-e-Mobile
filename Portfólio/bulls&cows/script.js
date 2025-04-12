let contador = 1;

function gerarSenha(){
    let numeros = [];
    while(numeros.length < 4){
        let num = Math.floor(Math.random() * 10);
        if(!numeros.includes(num)){
            numeros.push(num);
        }
    }
    return numeros.join('');
}

let senha = gerarSenha();
console.log("Senha escondida pro desenolvedor hehehehe... ", senha);

function tentar(){
    const tentativa = document.querySelector(".caixa").value;

    if (!/^\d{4}$/.test(tentativa)) {
        alert("Apenas números são aceitos!");
        return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (tentativa[i] === senha[i]) {
            bulls++;
        } else if (senha.includes(tentativa[i])) {
            cows++;
        }
    }

    mostrarResultado(tentativa, bulls, cows);

    if (bulls === 4) {
        alert("Parabéns! Você acertou a senha!");
    }
}

function mostrarResultado(tentativa, bulls, cows) {
    const ulTentativa = document.querySelector("#tentativas");

    const li = document.createElement("li");
    li.textContent = `Tentativa ${contador}: ${tentativa} | Bulls: ${bulls} | Cows: ${cows}`;
    ulTentativa.prepend(li);

    contador++;
}

function reiniciar() {
    location.reload();
}
