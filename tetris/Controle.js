import Quadrado from "./classes/Quadrado.js";
import Peca from "./classes/Peca.js";


export default class Controle {
  constructor () {
    this.looping = null
    this.pecasJogo = Peca.criarTetraminos()
    this.pecas = []
    this.pecaEmQueda = null
    this.linhasCompletas = []
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      this.ctx = canvas.getContext("2d");
    }
    // this.criarPecas()
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
    }, 400);
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
    //     console.log(el)
    //     // this.linhasCompletas.includes(el.p1.y)
    //   })
    // })
    this.pecas.forEach(element => {
      element.coordenadas.forEach(el => {
        // el.pontos.
        this.ctx.moveTo(el.p1.x, el.p1.y)
        this.ctx.lineTo(el.p2.x, el.p2.y)
        this.ctx.lineTo(el.p3.x, el.p3.y)
        this.ctx.lineTo(el.p4.x, el.p4.y)
        if (!this.linhasCompletas.includes(el.p1.y)) {
          // console.log('oi')
          // this.ctx.fillRect = 'red';
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
        let newCoordenadas = []
        this.pecas.forEach(element => {
          element.coordenadas = element.coordenadas.filter(el => {
            return el.p1.y != i
          })
        })
        this.pecas.forEach(element => {
          element.coordenadas.forEach(el => {
            if (el.p1.y < i) {
              element.transladar('baixo')
            }
          })
        })
      }
    }
  }
    
  marcarLinha (linha) {
    this.linhasCompletas.push(linha)
  }

}

let controle = new Controle()

controle.iniciarJogo()

// Verifica se o dispositivo é um celular
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  document.getElementById('controle').style.display = 'block'
} else {
  document.getElementById('controle').style.display = 'none'
}

// ('hidden', true)

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

document.getElementById('botao-cima').addEventListener('click', function() {
  controle.pecaEmQueda.girar()
})

document.getElementById('botao-esquerda').addEventListener('click', function() {
  controle.pecaEmQueda.transladar('esquerda')
})

document.getElementById('botao-direita').addEventListener('click', function() {
  controle.pecaEmQueda.transladar('direita')
})

document.getElementById('botao-baixo').addEventListener('click', function() {
  controle.pecaEmQueda.transladar('baixo')
})

// document.addEventListener('keydown', function(event) {
//   if (controle.pecaEmQueda) {
//     if (event.key === "ArrowUp") {
//       controle.pecaEmQueda.girar()
//     } else if (event.key === "ArrowDown") {
//       controle.pecaEmQueda.transladar('baixo')
//     } else if (event.key === "ArrowLeft") {
//       controle.pecaEmQueda.transladar('esquerda')
//     } else if (event.key === "ArrowRight") {
//       controle.pecaEmQueda.transladar('direita')
//     }
//   }
//   if (event.key == 'Enter') {
//     if (controle.looping) {
//       clearInterval(controle.looping)
//       controle.looping = null
//     } else {
//       controle.play()
//     }
//   }
// })
