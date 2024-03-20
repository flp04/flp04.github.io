import Quadrado from "./Quadrado.js"
import Ponto from "./Ponto.js"

export default class Peca {
  constructor (posicoes) { // coordenadas iniciais
    let quadrado = new Quadrado(0, 0, 10, 0, 10, 10, 0, 10)
    this.coordenadas = [quadrado]
    this.posicoes = posicoes
    this.posicao = 0
    this.posicoes[this.posicao].forEach(el => {
      this.novoQuadrado(el)
    })
  }

  novoQuadrado (sentido) {
    let ci = this.coordenadas[this.coordenadas.length - 1]
    let novoQuadrado = new Quadrado(ci.p1.x, ci.p1.y, ci.p2.x, ci.p2.y, ci.p3.x, ci.p3.y, ci.p4.x, ci.p4.y)
    novoQuadrado.p1.transladar(sentido)
    novoQuadrado.p2.transladar(sentido)
    novoQuadrado.p3.transladar(sentido)
    novoQuadrado.p4.transladar(sentido)
    this.coordenadas.push(novoQuadrado)
  }

  transladar (sentido) {
    this.coordenadas.forEach(el => {
      el.p1.transladar(sentido)
      el.p2.transladar(sentido)
      el.p3.transladar(sentido)
      el.p4.transladar(sentido)
    });
  }

  calcularCentroDaPeca() {
    console.log(this.coordenadas)
    let somaX = 0
    let somaY = 0
    let acumulado = 0
    this.coordenadas.forEach(quadrado => {
      console.log(quadrado.pontos)
      quadrado.pontos.forEach(ponto => {
        somaX += ponto.x
        somaY += ponto.y
        acumulado += 1
      })
    })
    return new Ponto(parseInt(somaX / acumulado), parseInt(somaY / acumulado))
    let pontoCentro = console.log(somaX / acumulado, somaY / acumulado)
    return new Ponto(3, 2)
    // console.log(pontoCentro)
  }

  girar () {
    this.coordenadas = [this.coordenadas[0]]
    if (this.posicao >= this.posicoes.length - 1) {
      this.posicao = 0
    } else {
      this.posicao += 1
    }
    this.posicoes[this.posicao].forEach(el => {
      this.novoQuadrado(el)
    })
  }


// Função para rotacionar todos os pontos de um polígono em torno do seu centro
rotacionar(angulo) {
  this.coordenadas.forEach(quadrado => {
    quadrado.pontos.forEach(ponto => {
      console.log(this.calcularCentroDaPeca())
      ponto.rotacionar(angulo, this.calcularCentroDaPeca())
    })
    // quadrado.pontos.map(ponto => ponto.rotacionar(angulo, this.calcularCentroDaPeca()))
  })
  // let pontoDeRotacao = this.calcularCentroDaPeca();
  // return poligono.map(ponto => rotacionarPonto(ponto, angulo, pontoDeRotacao));
}

  verificarTocouBase () {
    let resultado = false
    this.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(el => {
        if (el.y >= 300) {
          resultado = true
        }
      })
    })
    return resultado
  }

  verificarTocouOutraPeca (pecas) {
    let resultado = false
    this.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(el => {
        pecas.forEach(peca => {
          peca.coordenadas.forEach(segundoQuadrado => {
            console.log(quadrado != segundoQuadrado)
            segundoQuadrado.pontos.forEach(el2 => {
              console.log(el.y)
              if (el.y >= el2.y) {
                resultado = true
              }
            })
          })
        })
      })
    })
    return resultado
  }
}
