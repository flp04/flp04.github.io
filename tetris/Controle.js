import Quadrado from "./classes/Quadrado.js";
import Peca from "./classes/Peca.js";

export default class Controle {
  constructor () {
    this.pecas = []
    this.pecasJogo = []
    this.pecaEmQueda = null
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      this.ctx = canvas.getContext("2d");
    }
  }

  setPecasJogo (peca) {
    this.pecasJogo.push(peca)
    // this.pecaEmQueda = peca
    // this.desenhar()
  }

  setPeca (peca) {
    novaPeca = new Peca(peca.posicoes)
    console.log(novaPeca)
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    this.pecas.push(novaPeca)
    this.pecaEmQueda = novaPeca
  }
  
  iniciarJogo() {
    this.setPeca(this.pecasJogo[Math.floor(Math.random() * (this.pecasJogo.length))]) 
    this.pecaEmQueda = !this.pecaEmQueda ? this.pecas[0] : this.pecaEmQueda 
  }

  desenhar () { // peca = array de quadrados
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.ctx.beginPath()
    this.pecas.forEach(element => {
      element.coordenadas.forEach(el => {
        this.ctx.moveTo(el.p1.x, el.p1.y)
        this.ctx.lineTo(el.p2.x, el.p2.y)
        this.ctx.lineTo(el.p3.x, el.p3.y)
        this.ctx.lineTo(el.p4.x, el.p4.y)
      })
    });
    this.ctx.fillStyle = 'black'
    this.ctx.fill()
  }

  verificarTocouOutraPeca () {
    let resultado = false
    this.pecaEmQueda.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(el => {
        this.pecas.forEach(peca => {
          if (peca != this.pecaEmQueda) {
            peca.coordenadas.forEach(segundoQuadrado => {
              segundoQuadrado.pontos.forEach(el2 => {
                if (el.y >= el2.y ) {
                  if (((quadrado.p3.x <= segundoQuadrado.p2.x) && (quadrado.p4.x >= segundoQuadrado.p1.x))) {
                    resultado = true
                  }
                }
              })
            })
          }
        })
      })
    })
    return resultado
  }

  verificarLinhaCompleta () {
    for (let i = 0; i <=299; i++) {
      let peguei = controle.ctx.getImageData(0, i, 300, 1)
      for (let j = 0; j < peguei.data.length; j += 4) {
        if (peguei.data[j + 3] == 0) {
          return false
        }
      }
      return true
    }
  }

}

let controle = new Controle()

let posicoes = [
  ['direita', 'direita', 'esquerda', 'baixo'],
  ['baixo', 'baixo', 'cima', 'esquerda'],
  ['direita', 'direita', 'esquerda', 'cima'],
  ['baixo', 'baixo', 'cima', 'direita'],
]
let peca1 = new Peca(posicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(peca1)

let novasPosicoes = [
  ['baixo', 'direita', 'baixo'],
  ['esquerda', 'baixo', 'esquerda'],
]
let novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

novasPosicoes = [
  ['baixo', 'esquerda', 'baixo'],
  ['direita', 'baixo', 'direita'],
]
novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

novasPosicoes = [
  ['baixo', 'baixo', 'baixo', 'baixo'],
  ['direita', 'direita', 'esquerda', 'esquerda', 'esquerda', 'esquerda'],
]
novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

novasPosicoes = [
  ['direita', 'baixo', 'esquerda', 'cima'],
]
novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

novasPosicoes = [
  ['direita', 'esquerda', 'baixo', 'baixo'],
  ['baixo', 'direita', 'direita'],
  ['baixo', 'baixo', 'esquerda'],
  // ['direita', 'direita', 'baixo'],
]
novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

novasPosicoes = [
  ['esquerda', 'direita', 'baixo', 'baixo'],
  ['esquerda', 'esquerda', 'cima'],
  ['baixo', 'baixo', 'direita'],
]
novaPeca = new Peca(novasPosicoes)
for (let i; i < 13; i++) {
  peca1.transladar('direita')
}
controle.setPecasJogo(novaPeca)

controle.iniciarJogo()

setInterval(() => {
  if (controle.pecaEmQueda && (!controle.pecaEmQueda.verificarTocouBase() && !controle.verificarTocouOutraPeca())) {
    controle.pecaEmQueda.transladar('baixo')
  } else {

    novaPeca = new Peca(controle.pecasJogo[Math.floor(Math.random() * (controle.pecasJogo.length))].posicoes)
    controle.pecaEmQueda = novaPeca
    controle.setPeca(novaPeca)
    console.log(controle.pecasJogo[Math.floor(Math.random() * (controle.pecasJogo.length))])
  }
  console.log(controle.verificarLinhaCompleta())
  return controle.desenhar()
}, 500);

document.addEventListener('keydown', function(event) {
  if (controle.pecaEmQueda) {
    if (event.key === "ArrowUp") {
      controle.pecaEmQueda.girar()
    } else if (event.key === "ArrowDown") {
      controle.pecaEmQueda.transladar('baixo')
    } else if (event.key === "ArrowLeft") {
      controle.pecaEmQueda.transladar('esquerda')
    } else if (event.key === "ArrowRight") {
      controle.pecaEmQueda.transladar('direita')
    }  
  }
})