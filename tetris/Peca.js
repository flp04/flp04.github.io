import Ponto from './Ponto.js'
import Quadro from './Quadro.js'

export default class Peca {
  constructor (arrayPontos) {
    this.p1 = new Ponto(arrayPontos[0][0], arrayPontos[0][1])
    this.p2 = new Ponto(arrayPontos[1][0], arrayPontos[1][1])
    this.p3 = new Ponto(arrayPontos[2][0], arrayPontos[2][1])
    this.p4 = new Ponto(arrayPontos[3][0], arrayPontos[3][1])
    // console.log(this.p1, this.p2, this.p3, this.p4)
    Quadro.draw(this.p1, this.p2, this.p3, this.p4)
    this.desenhar('baixo')
    this.desenhar('direita')
    this.desenhar('baixo')
  }

  mover (sentido) {
    this.p1.transladar(10, sentido)
    this.p2.transladar(10, sentido)
    this.p3.transladar(10, sentido)
    this.p4.transladar(10, sentido)
    // console.log(this.p1, this.p2, this.p3, this.p4)
    draw(this.p1, this.p2, this.p3, this.p4)
    
  }

  desenhar (sentido) {
    this.p1.transladar(10, sentido)
    this.p2.transladar(10, sentido)
    this.p3.transladar(10, sentido)
    this.p4.transladar(10, sentido)
    desenharSemApagar(this.p1, this.p2, this.p3, this.p4)
  }

  cair () {
    var intervalo = setInterval(() => {
      if (!x.tocou()) {
        console.log(x.tocou())
        x.mover('baixo')
      } else {
        // console.log(x.tocou())
        clearInterval(intervalo)
        let y = new Peca([[0, 0], [0, 10], [10, 10], [10, 0]])
        x.cair()
      }
    }, 1000);
  }

  tocou () {
    return this.p2.y >= 300 || this.p3.y >= 300
  }

  tocouPeca(listaPecas) {
    // console.log(listaPecas)
    listaPecas.forEach(el => {
      console.log(p2.y >= Math.min(el.p1.y, el.p4.y))
      return p2.y >= Math.min(el.p1.y, el.p4.y)
      if (this.p2.y >= Math.min(el.p1.y, el.p4.y) ||this.p3.y >= Math.min(el.p1.y, el.p4.y) ||
        this.p2.y >= Math.max(el.p1.y, el.p4.y) ||this.p3.y >= Math.max(el.p1.y, el.p4.y)) {
          return 'oi'
        } else {
          return console.log('ué')
        }
    });
  }
}