const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let pulando = false
let posicao = 0

//Adicionar ação de pulo

function pressionar(event) {
  if (event.keyCode === 32) {
    if (!pulando) {
      pulo()
    }
  }
}

function pulo() {
  pulando = true

  let intervaloSubir = setInterval(() => {
    if (posicao >= 150) {
      clearInterval(intervaloSubir)

      //Descer
      let intervaloDescer = setInterval(() => {
        if (posicao <= 0) {
          clearInterval(intervaloDescer)
          pulando = false // enquando ele estiver no ar, não pode pular novamente.
        } else {
          posicao -= 20
          dino.style.bottom = posicao + 'px'
        }
      }, 20)
    } else {
      //Subir
      posicao += 20
      dino.style.bottom = posicao + 'px'
    }
  }, 20)
}

/*Cactos */

function criarCactos() {
  const cacto = document.createElement('div')
  let posicaoCacto = 1000
  let tempoAleatorio = Math.random() * 5500

  cacto.classList.add('cacto')
  cacto.style.left = posicaoCacto + 'px' // cacto vai começar na direita
  background.appendChild(cacto)

  //movimentar cacto

  let intervaloEsq = setInterval(() => {

    if (posicaoCacto < -60) { // saiu da tela
      clearInterval(intervaloEsq)
      background.removeChild(cacto)

    } else if (posicaoCacto > 0 && posicaoCacto < 60 && posicao < 60) {
      //contato com cacto
      clearInterval(intervaloEsq)
      document.body.innerHTML = '<h1 class="game-over"> Fim do Jogo </h1>'
    } else {
      posicaoCacto -= 10
      cacto.style.left = posicaoCacto + 'px'
    }
  }, 20)

  setTimeout(criarCactos, tempoAleatorio)
}

criarCactos()
document.addEventListener('keyup', pressionar)