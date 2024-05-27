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
    for (let i; i < 13; i++) {
      this.transladar('direita')
    }
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

  static criarTetraminos () {
    let pecas = []
    let posicoes = []
    posicoes.push([
      ['direita', 'direita', 'esquerda', 'baixo'],
      ['baixo', 'baixo', 'cima', 'esquerda'],
      ['direita', 'direita', 'esquerda', 'cima'],
      ['baixo', 'baixo', 'cima', 'direita'],
    ]) // t
    posicoes.push([
      ['baixo', 'direita', 'baixo'],
      ['esquerda', 'baixo', 'esquerda'],
    ]) // s
    posicoes.push([
      ['baixo', 'esquerda', 'baixo'],
      ['direita', 'baixo', 'direita'],
    ]) // z
    posicoes.push([
      ['direita', 'direita', 'esquerda', 'esquerda', 'esquerda', 'esquerda'],
      ['baixo', 'baixo', 'baixo', 'baixo'],
    ]) // i
    posicoes.push([
      ['direita', 'baixo', 'esquerda', 'cima'],
    ]) // o
    posicoes.push([
      ['direita', 'esquerda', 'baixo', 'baixo'],
      ['baixo', 'direita', 'direita'],
      ['baixo', 'baixo', 'esquerda'],
      // ['direita', 'direita', 'baixo'],
    ]) // j
    posicoes.push([
      ['esquerda', 'direita', 'baixo', 'baixo'],
      ['cima', 'esquerda', 'esquerda'],
      ['baixo', 'baixo', 'direita'],
    ]) // l
    posicoes.forEach(el => {
      pecas.push(new Peca(el))
    })
    return pecas
    // novaPeca = new Peca(novasPosicoes)
    // for (let i; i < 13; i++) {
    //   peca1.transladar('direita')
    // }
    // this.setPecasJogo(novaPeca)
  }
}
