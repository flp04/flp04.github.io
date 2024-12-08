export default class Placar {
  constructor () {
    this.pontos = 0
    this.level = 1
    this.proximoLevel = 1000
    document.getElementById('pontos').innerHTML = `Pontos: ${this.pontos}`
    document.getElementById('level').innerHTML = `Level: ${this.level}`
  }
  
  setPontos(pontos) {
    this.pontos += pontos
    if (this.pontos >= this.proximoLevel) {
      this.proximoLevel += 1000
      this.level++
    }
    document.getElementById('pontos').innerHTML = `Pontos: ${this.pontos}`
    document.getElementById('level').innerHTML = `Level: ${this.level}`
  }
}