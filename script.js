function carregar() {

    let imagemPrincipal = document.querySelector('#Imagem-Principal');
    let imagemUm = document.querySelector('#Imagem-Um');
    let imagemDois = document.querySelector('#Imagem-Dois');
    let imagemTres = document.querySelector('#Imagem-Tres');

    let imagens = ['img/imagemDireita.png', 'img/imagemCentro.png', 'img/imagemEsquerda.png'];
    let currentIndex = 0;


    document.querySelector('.carrossel .material-symbols-outlined:first-child').addEventListener('click', function () {
        trocarImagem('anterior');
    });

    document.querySelector('.carrossel .material-symbols-outlined:last-child').addEventListener('click', function () {
        trocarImagem('proxima');
    });

 
    imagemUm.addEventListener('click', function () {
        trocarImagem(0);
    });


    imagemDois.addEventListener('click', function () {
        trocarImagem(1);
    });


    imagemTres.addEventListener('click', function () {
        trocarImagem(2);
    });

    function trocarImagem(direcaoOuIndice) {
        if (direcaoOuIndice === 'anterior') {
            currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
        } else if (direcaoOuIndice === 'proxima') {
            currentIndex = (currentIndex + 1) % imagens.length;
        } else {
            currentIndex = direcaoOuIndice;
        }

        imagemPrincipal.setAttribute('src', imagens[currentIndex]);
    }

    let botaos = document.getElementById('somar');
    let botaod = document.getElementById('diminuir');
    let numero = document.getElementById('numero');

    botaos.addEventListener('click', function () {
        numero.innerHTML = parseInt(numero.innerHTML) + 1;
    });

    botaod.addEventListener('click', function () {
        numero.innerHTML = parseInt(numero.innerHTML) - 1;
    })

    let adicionarNaLista = document.getElementById('Adicionar-Na-Lista');

    adicionarNaLista.addEventListener('click', function () {
        alert("Você adicionou um item a lista!");
    })

}

document.addEventListener('DOMContentLoaded', carregar);
