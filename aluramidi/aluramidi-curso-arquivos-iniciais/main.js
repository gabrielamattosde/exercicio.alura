function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();


}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


// o enquanto espera receber uma informação V ou F
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);


}

