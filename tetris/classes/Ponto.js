export default class Ponto {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  transladar (sentido) {
    switch (sentido) {
      case 'direita': 
        this.x += 10
        break
      case 'esquerda': 
        this.x -= 10
        break
      case 'cima':
        this.y -= 10
        break
      case 'baixo': 
        this.y += 10    
        break
    }
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
