import Quadrado from "./classes/Quadrado.js";
import Peca from "./classes/Peca.js";

export default class Controle {
  constructor () {
    this.looping = null
    this.pecas = []
    this.pecasJogo = []
    this.pecaEmQueda = null
    this.linhasCompletas = []
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      this.ctx = canvas.getContext("2d");
    }
    this.criarPecas()
  }

  criarPecas () {
    // _|_
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
    // this.setPecasJogo(peca1)
    
    // S
    let novasPosicoes = [
      ['baixo', 'direita', 'baixo'],
      ['esquerda', 'baixo', 'esquerda'],
    ]
    let novaPeca = new Peca(novasPosicoes)
    for (let i; i < 13; i++) {
      peca1.transladar('direita')
    }
    // this.setPecasJogo(novaPeca)
    
    // S (invertido)
    novasPosicoes = [
      ['baixo', 'esquerda', 'baixo'],
      ['direita', 'baixo', 'direita'],
    ]
    novaPeca = new Peca(novasPosicoes)
    for (let i; i < 13; i++) {
      peca1.transladar('direita')
    }
    // this.setPecasJogo(novaPeca)
    
    // |
    novasPosicoes = [
      ['direita', 'direita', 'esquerda', 'esquerda', 'esquerda', 'esquerda'],
      ['baixo', 'baixo', 'baixo', 'baixo'],
    ]
    novaPeca = new Peca(novasPosicoes)
    for (let i; i < 13; i++) {
      peca1.transladar('direita')
    }
    this.setPecasJogo(novaPeca)
    
    // O
    novasPosicoes = [
      ['direita', 'baixo', 'esquerda', 'cima'],
    ]
    novaPeca = new Peca(novasPosicoes)
    for (let i; i < 13; i++) {
      peca1.transladar('direita')
    }
    // this.setPecasJogo(novaPeca)
    
    // L invertido
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
    // this.setPecasJogo(novaPeca)
    
    // L
    novasPosicoes = [
      ['esquerda', 'direita', 'baixo', 'baixo'],
      ['esquerda', 'esquerda', 'cima'],
      ['baixo', 'baixo', 'direita'],
    ]
    novaPeca = new Peca(novasPosicoes)
    for (let i; i < 13; i++) {
      peca1.transladar('direita')
    }
    // this.setPecasJogo(novaPeca)
  }

  play () {
    this.looping = setInterval(() => {
      if (controle.pecaEmQueda && (!controle.pecaEmQueda.verificarTocouBase() && !controle.verificarTocouOutraPeca())) {
        controle.pecaEmQueda.transladar('baixo')
      } else {
        let novaPeca = new Peca(controle.pecasJogo[Math.floor(Math.random() * (controle.pecasJogo.length))].posicoes)
        controle.pecaEmQueda = novaPeca
        controle.setPeca(novaPeca)
      }
      controle.verificarLinhaCompleta()
      // console.log(controle.verificarLinhaCompleta())
      return controle.desenhar()
    }, 100);
  }

  setPecasJogo (peca) {
    this.pecasJogo.push(peca)
    // this.pecaEmQueda = peca
    // this.desenhar()
  }

  setPeca (peca) {
    let novaPeca = new Peca(peca.posicoes)
    console.log(novaPeca)
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
    // novaPeca.transladar('direita')
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
    // this.pecas.forEach(element => {
    //   element.coordenadas.filter(el => {
    //     this.linhasCompletas.includes(el.p1y)
    //   })
    // })
    this.pecas.forEach(element => {
      element.coordenadas.forEach(el => {
        // el.pontos.
        if (!this.linhasCompletas.includes(el.p1.y)) {
          // console.log('oi')
          // this.ctx.fillRect = 'red';
          this.ctx.moveTo(el.p1.x, el.p1.y)
          this.ctx.lineTo(el.p2.x, el.p2.y)
          this.ctx.lineTo(el.p3.x, el.p3.y)
          this.ctx.lineTo(el.p4.x, el.p4.y)
        }
        // console.log(el)
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
    // this.ctx.fillStyle = 'black';
    // this.ctx.fillRect(0, 290, 150, 10);
    for (let i = 0; i <= 290; i+=10) {
      let resultado = true
      let linha = this.ctx.getImageData(0, i, 150, 10)
      for (let i = 3; i <= linha.data.length; i += 4) {
        if (linha.data[i] == 0) {
          resultado = false
        }
      }
      if (resultado) {
        this.marcarLinha(i)
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, i, 150, 10);
      }
      // console.log(i, resultado)
    }
  }
    
  marcarLinha (linha) {
    this.linhasCompletas.push(linha)
  }

}

let controle = new Controle()

controle.iniciarJogo()

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
  if (event.key == 'Enter') {
    if (controle.looping) {
      clearInterval(controle.looping)
      controle.looping = null
    } else {
      controle.play()
    }
  }
})
