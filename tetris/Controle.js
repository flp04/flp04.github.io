import Peca from "./classes/Peca.js";
import Canvas from "./classes/Canvas.js";
import ControlesUsuario from "./classes/Controle.js";
import Placar from "./classes/Placar.js";
// import Quadrado from "./classes/Quadrado.js";

export default class Controle {
  constructor () {
    // atributo para armazenar o setInterval responsável por gerar peças aleatórias e as derrubar na tela
    this.looping = null
    // atributo para armazenar objeto de controles do usuario
    this.controlesUsuario = new ControlesUsuario(this)
    // atributo para armazenar as peças do jogo geradas de tetraminós
    this.pecasJogo = Peca.criarTetraminos()
    // atributo para armazenar a próxima peça a cair
    this.proximaPecaCair = null
    // atributo para armazenar a peça que está em queda
    this.pecaEmQueda = null
    // atributo para armazenar as pecas que ja cairam no jogo
    this.pecasAcumuladas = []
    // atributo para armazenar a tela do canva
    this.canvas = new Canvas()
    // atributo para armazenar os pontos acumulados
    this.placar = new Placar()
  }

  iniciarJogo () {
    let x = 400 - this.placar.level * 200
    this.looping = setInterval(() => {
      // console.log(1000 - (this.placar.level * 100))
      if (this.pecaEmQueda && !this.pecaEmQueda.verificarTocouBase() && !this.verificarTocouOutraPeca()) {
        this.pecaEmQueda.transladar('baixo', this)
      } else {
        // verifica se a próxima peça a cair irá tocar o topo
        if (this.pecaEmQueda && this.pecaEmQueda.verificarTocouTopo()) {
          clearInterval(this.looping)
          return alert('GAME OVER')
        }
        this.verificarLinhaCompleta()
        this.setProximaPeca()
      }
      this.canvas.desenhar(this.pecasAcumuladas)
      this.verificarLinhaCompleta()
      console.log(x)
    }, x);
  }

  setProximaPeca() {
    let numeroAleatorio = Math.floor(Math.random() * (this.pecasJogo.length))
    let novaPeca = new Peca(this.pecasJogo[numeroAleatorio].posicoes, this.pecasJogo[numeroAleatorio].nome)
    if (this.proximaPecaCair) {
      this.setPecaQueda(this.proximaPecaCair)
      this.pecasAcumuladas.push(this.proximaPecaCair)
    } else {
      this.setPecaQueda(novaPeca)
      this.pecasAcumuladas.push(novaPeca)
    }
    numeroAleatorio = Math.floor(Math.random() * (this.pecasJogo.length))
    novaPeca = new Peca(this.pecasJogo[numeroAleatorio].posicoes, this.pecasJogo[numeroAleatorio].nome)
    this.proximaPecaCair = novaPeca
    this.canvas.desenharProximaPeca(this.proximaPecaCair)
  }

  setPecaQueda (peca) {
    this.pecaEmQueda = peca
  }

  setPeca (peca) {
    let novaPeca = new Peca(peca.posicoes)
    this.pecasAcumuladas.push(novaPeca)
  }

  verificarTocouOutraPeca () {
    let resultado = false
    this.pecaEmQueda.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(el => {
        this.pecasAcumuladas.forEach(peca => {
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
    for (let i = 285; i >= 0; i-=15) {
      let resultado = true
      let linha = this.canvas.ctx.getImageData(0, i, 150, 15)
      // faz a varredura horizontal
      for (let x = 3; x <= linha.data.length; x += 4) {
        if (linha.data[x] == 0 && linha.data[x-1] == 0 && linha.data[x-2] == 0) {
          resultado = false
        }
      }
      if (resultado) {
        this.pecasAcumuladas.forEach(element => {
          element.coordenadas = element.coordenadas.filter(el => {
            return el.p1.y != i
          })
        })
        this.pecasAcumuladas.forEach(element => {
          element.coordenadas.forEach(quadrado => {
            quadrado.pontos.forEach(coordenada => {
              // let z = this.canvas.ctx.getImageData(coordenada.x, coordenada.y, 1, 1)
              if (coordenada.y <= i) {
                coordenada.y += 15
              }
            })
          })
        })
        this.placar.setPontos(100)
      }
    }
  }
}

// Verifica se o dispositivo é um celular
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Exibe o controle se o dispositivo for um celular
if (isMobileDevice()) {
  document.getElementById('controle').style.display = 'block'
} else {
  document.getElementById('controle').style.display = 'none'
}

let controle = new Controle()

// // CONTROLES DO TECLADO
// document.addEventListener('keydown', function(event) {
//   if (event.key == 'Enter') {
//     if (controle.looping) {
//       // parar looping
//       clearInterval(controle.looping)
//       controle.looping = null
//     } else {
//       // iniciar/continuar looping
//       controle.iniciarJogo()
//     }
//   }

//   /* TODO 
//     COLOCAR UMA SEGUNDA CONDIÇÃO PARA VERIFICAR SE A PEÇA SAIRÁ DA TELA
//     */
//   if (controle.pecaEmQueda) { 
//     if (event.key === "ArrowUp") {
//       controle.pecaEmQueda.girar()
//     } else if (event.key === "ArrowDown") {
//       controle.pecaEmQueda.transladar('baixo')
//       // atualiza e exibe os pontos
//       controle.pontos += 1
//       document.getElementById('pontos').innerHTML = `Pontos: ${controle.pontos}`
//     } else if (event.key === "ArrowLeft") {
//       controle.pecaEmQueda.transladar('esquerda')
//     } else if (event.key === "ArrowRight") {
//       controle.pecaEmQueda.transladar('direita')
//     }
//   }
// })

// // CONTROLES DO CELULAR
// document.getElementById('botao-cima').addEventListener('click', function() {
//   controle.pecaEmQueda.girar()
// })
// document.getElementById('botao-esquerda').addEventListener('click', function() {
//   controle.pecaEmQueda.transladar('esquerda')
// })
// document.getElementById('botao-direita').addEventListener('click', function() {
//   controle.pecaEmQueda.transladar('direita')
// })
// document.getElementById('botao-baixo').addEventListener('click', function() {
//   controle.pecaEmQueda.transladar('baixo')
// })