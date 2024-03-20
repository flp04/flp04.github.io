export default class Ponto {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  transladar(valor, sentido) {
    switch (sentido) {
      case 'direita': 
        this.x += valor
        break
      case 'esquerda': 
        this.x -= valor
        break
      case 'cima':
        this.y -= valor
        break
      case 'baixo': 
        this.y += valor    
        break
    }
  }
}