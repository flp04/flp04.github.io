import Quadro from "./Quadro.js"
import Peca from "./Peca.js"
import Ponto from "./Ponto.js"

document.addEventListener('keydown', function(event) {
  if (pecaCaindo) {
    if (event.key === "ArrowUp") {
      pecaCaindo.mover('cima')
    } else if (event.key === "ArrowDown") {
      pecaCaindo.mover('baixo')
    } else if (event.key === "ArrowLeft") {
      pecaCaindo.mover('esquerda')
    } else if (event.key === "ArrowRight") {
      pecaCaindo.mover('direita')
    }
  }
})


var pecaCaindo = null

class Quadrado {

}

let p1 = new Ponto(0, 0)
let p2 = new Ponto(0, 10)
let p3 = new Ponto(10, 10)
let p4 = new Ponto(10, 0)

// let x = new Peca([[0, 0], [0, 10], [10, 10], [10, 0]])
// x.cair()
let x = new Quadro()
x.novaPeca(new Peca([[0, 0], [0, 10], [10, 10], [10, 0]]))
pecaCaindo = x.pecas[0]

// x.novaPeca(new Peca([[0, 290], [0, 300], [10, 300], [10, 290]]))
// console.warn(x.pecas)
// x.cair(x.pecas[0])
// var intervalo = setInterval(() => {
//   if (!x.tocou()) {
//     console.log(x.tocou())
//     x.mover('baixo')
//   } else {
//     console.log(x.tocou())
//     clearInterval(intervalo)
//   }
// }, 1000);