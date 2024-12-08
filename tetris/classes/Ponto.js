export default class Ponto {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  transladar (sentido) {
    switch (sentido) {
      case 'direita': 
        this.x += 15
        break
      case 'esquerda': 
        this.x -= 15
        break
      case 'cima':
        this.y -= 15
        break
      case 'baixo': 
        this.y += 15    
        break
    }
  }

  preverPontoTranslacao(sentido) {
    let x = this.x
    let y = this.y
    switch (sentido) {
      case 'direita':
        x += 15
        break
      case 'esquerda': 
        x -= 15
        break
      case 'cima':
        y -= 15
        break
      case 'baixo': 
        y += 15
        break
    }
    return {x: x, y: y}
  }

  testarTransladar (sentido, controle = null) {
    let x = this.x
    let y = this.y
    switch (sentido) {
      case 'direita':
        x += 15
        break
      case 'esquerda': 
        x -= 15
        break
      case 'cima':
        y -= 15
        break
      case 'baixo': 
        y += 15
        break
    }
    return x <= 150 && x >= 0 && y >= 0 && y <= 300
  }

  rotacionar (angulo, pontoDeRotacao) {
    // Função para rotacionar um ponto em torno de outro ponto
    let cos = Math.cos(angulo);
    let sin = Math.sin(angulo);
    console.log(pontoDeRotacao)
    let deltaX = this.x - pontoDeRotacao.x;
    let deltaY = this.y - pontoDeRotacao.y;
    this.x = pontoDeRotacao.x + (deltaX * cos - deltaY * sin);
    this.y = pontoDeRotacao.y + (deltaX * sin + deltaY * cos);
  }
}
