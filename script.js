const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let pulando = false

//Adicionar ação de pulo

function pressionar(evento) {
  if (event.keyCode === 32) {
    if (!pulando) {
      pulo()
    }
  }
}

function pulo() {
  let posicao = 0
  pulando = true

  let intervaloSubir = setInterval(() => {
    if (posicao >= 150) {
      clearInterval(intervaloSubir)

      //Descer
      let intervaloDescer = setInterval(() => {
        if (posicao <= 20) {
          clearInterval(intervaloDescer)
        }
        posicao -= 20
        dino.style.bottom = posicao + 'px'
      }, 20)

      pulando = false // enquando ele estiver no ar, não pode pular novamente.

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

  cacto.classList.add('cacto')
  cacto.style.left = 1000 + 'px' // cacto vai começar na direita
  background.appendChild(cacto)
}

criarCactos()
document.addEventListener('keyup', pressionar)