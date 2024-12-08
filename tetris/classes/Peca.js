import Quadrado from "./Quadrado.js"

export default class Peca {
  constructor (posicoes, nome) { // coordenadas iniciais
    let quadrado = new Quadrado(0 + 60, 0, 15 + 60, 0, 15 + 60, 15, 0 + 60, 15)
    this.coordenadas = [quadrado]
    this.posicoes = posicoes
    this.nome = nome
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

  transladar (sentido, controle) {
    let resultados = []
    let p1, p2, p3, p4
    let resultado = false
    this.coordenadas.forEach(el => {
      resultados.push(el.p1.testarTransladar(sentido, controle))
      resultados.push(el.p2.testarTransladar(sentido, controle))
      resultados.push(el.p3.testarTransladar(sentido, controle))
      resultados.push(el.p4.testarTransladar(sentido, controle))

      p1 = el.p1.preverPontoTranslacao(sentido)
      p2 = el.p2.preverPontoTranslacao(sentido)
      p3 = el.p3.preverPontoTranslacao(sentido)
      p4 = el.p4.preverPontoTranslacao(sentido)
      
      /* TODO
        CORRIGIR CONDIÇÕES PARA ENTRADA LATERAL DA PEÇA AO TOCAR OUTRA
       */
      el.pontos.forEach(pecaEmQueda => { // verifica se irá tocar em outra peça
        controle.pecasAcumuladas.forEach((peca, i) => {
          if (peca != this) {
            peca.coordenadas.forEach(quadrado => {
              quadrado.pontos.forEach(ponto => {
                if (pecaEmQueda.y >= ponto.y) {
                  if (((el.p3.x <= quadrado.p2.x) && (el.p4.x >= quadrado.p1.x))) {
                    resultado = true
                  }
                }
              })
            })
          }
        })
      })
    })
    
    if (!resultados.includes(false) && !resultado) {
      this.coordenadas.forEach(el => {
        el.p1.transladar(sentido)
        el.p2.transladar(sentido)
        el.p3.transladar(sentido)
        el.p4.transladar(sentido)
      })
      // controle.placar.setPontos(1)
    }
  }

  girar () {
    if (this.posicao >= this.posicoes.length - 1) {
      this.posicao = 0
    } else {
      this.posicao += 1
    }
    
    let pecaTeste = new Peca([this.posicoes[this.posicao]], this.nome)
    // console.log(pecaTeste, this)
    pecaTeste.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(ponto => {
        if (ponto.x <= 150 && ponto.x >= 0 && ponto.y >= 0 && ponto.y <= 300) {
          // console.log(ponto)
        } else {
          // console.log('oi')
        }
      })
    })

    // return x <= 150 && x >= 0 && y >= 0 && y <= 300
    this.coordenadas = [this.coordenadas[0]]
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

  verificarTocouTopo () {
    let resultado = false
    this.coordenadas.forEach(quadrado => {
      quadrado.pontos.forEach(el => {
        if (el.y == 0) {
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
            segundoQuadrado.pontos.forEach(el2 => {
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
    posicoes.push([[
      ['direita', 'direita', 'esquerda', 'baixo'],
      ['baixo', 'baixo', 'cima', 'esquerda'],
      ['direita', 'direita', 'esquerda', 'cima'],
      ['baixo', 'baixo', 'cima', 'direita'],
    ], 't']) // t
    posicoes.push([[
      ['baixo', 'direita', 'baixo'],
      ['esquerda', 'baixo', 'esquerda'],
    ], 's']) // s
    posicoes.push([[
      ['direita', 'baixo', 'direita'],
      ['baixo', 'esquerda', 'baixo'],
    ], 'z']) // z
    posicoes.push([[
      ['direita', 'direita', 'esquerda', 'esquerda', 'esquerda'],
      ['baixo', 'baixo', 'baixo'],
      // ['direita', 'direita', 'esquerda', 'esquerda', 'esquerda', 'esquerda'],
      // ['baixo', 'baixo', 'baixo', 'baixo'],
    ], 'i']) // i
    posicoes.push([[
      ['direita', 'baixo', 'esquerda', 'cima'],
    ], 'o']) // o
    posicoes.push([[
      ['direita', 'esquerda', 'baixo', 'baixo'],
      ['cima', 'esquerda', 'esquerda'],
      ['baixo', 'baixo', 'esquerda'],
      ['baixo', 'direita', 'direita'],
      // ['direita', 'direita', 'baixo'],
    ], 'j']) // j
    posicoes.push([[
      ['baixo', 'baixo', 'direita'],
      ['cima', 'direita', 'direita'],
      ['esquerda', 'direita', 'baixo', 'baixo'],
      ['baixo', 'esquerda', 'esquerda'],
    ], 'l']) // l
    posicoes.forEach(el => {
      pecas.push(new Peca(el[0], el[1]))
      // if (['s', 't'].includes(el[1])) {
      //   pecas.push(new Peca(el[0], el[1]))
      // }
    })
    return pecas
  }
}
