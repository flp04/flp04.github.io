import Ponto from './Ponto.js'

export default class Quadrado {
  constructor (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
    this.p1 = new Ponto(p1x, p1y)
    this.p2 = new Ponto(p2x, p2y)
    this.p3 = new Ponto(p3x, p3y)
    this.p4 = new Ponto(p4x, p4y)
    this.pontos = [this.p1, this.p2, this.p3, this.p4]
  }
}