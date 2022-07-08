const cards = document.querySelectorAll('.card');
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let trancarTabuleiro = false;

function flipCard(){
    if(trancarTabuleiro) return; //evita virar mais de duas cartas
    if(this == primeiraCarta) return; //evita q a mesma carta seja selecionada duas vezes
    this.classList.add('flip');
    if(!cartaVirada){
        cartaVirada = true;
        primeiraCarta = this;
        return;
    }
    segundaCarta = this;
    cartaVirada = false;
    checkFormat();
}

function checkFormat(){
    if(primeiraCarta.dataset.card == segundaCarta.dataset.card){
        disableCard();
        return;
    }
    desvirarCarta();
}

function disableCard(){
    primeiraCarta.removeEventListener('click', flipCard);
    segundaCarta.removeEventListener('click', flipCard);
}

function desvirarCarta(){
    trancarTabuleiro = true;
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        trancarTabuleiro = false;
    }, 1500)
}

function resetarTabuleiro(){
    [cartaVirada, trancarTabuleiro] = [false, false];
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});


