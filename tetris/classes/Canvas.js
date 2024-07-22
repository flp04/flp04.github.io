export default class Canva {
  constructor () {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      this.ctx = canvas.getContext("2d", { willReadFrequently: true });
    }
    
    const proximaPeca = document.getElementById("proxima-peca");
    if (proximaPeca.getContext) {
      this.ctxProximaPeca = proximaPeca.getContext('2d', {willReadFrequently: true})
    }
  }

  desenhar (pecasAcumuladas) {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    // this.ctx.beginPath()
    pecasAcumuladas.forEach(element => {
      switch(element.nome) {
        case 't':
          this.ctx.fillStyle = 'red'
          break
        case 's':
          this.ctx.fillStyle = 'green'
          break
        case 'z':
          this.ctx.fillStyle = 'blue'
          break
        case 'i':
          this.ctx.fillStyle = 'orange'
          break
        case 'o':
          this.ctx.fillStyle = 'gray'
          break
        case 'j':
          this.ctx.fillStyle = 'brown'
          break
        case 'l':
          this.ctx.fillStyle = 'purple'
          break
        default:
          this.ctx.fillStyle = 'black'
      }
      element.coordenadas.forEach(el => {
        this.ctx.beginPath()
        this.ctx.moveTo(el.p1.x, el.p1.y)
        this.ctx.lineTo(el.p2.x, el.p2.y)
        this.ctx.lineTo(el.p3.x, el.p3.y)
        this.ctx.lineTo(el.p4.x, el.p4.y)
        this.ctx.fill()
      })
    });
    // this.ctx.fillStyle = 'black'
    // this.ctx.fill()
  }

  desenharProximaPeca (peca) {
    // console.log(peca)
    this.ctxProximaPeca.clearRect(0, 0, 150, 300)
    switch(peca.nome) {
      case 't':
        this.ctxProximaPeca.fillStyle = 'red'
        break
      case 's':
        this.ctxProximaPeca.fillStyle = 'green'
        break
      case 'z':
        this.ctxProximaPeca.fillStyle = 'blue'
        break
      case 'i':
        this.ctxProximaPeca.fillStyle = 'orange'
        break
      case 'o':
        this.ctxProximaPeca.fillStyle = 'gray'
        break
      case 'j':
        this.ctxProximaPeca.fillStyle = 'brown'
        break
      case 'l':
        this.ctxProximaPeca.fillStyle = 'purple'
        break
      default:
        this.ctxProximaPeca.fillStyle = 'black'
    }
    peca.coordenadas.forEach(quadrado => {
      this.ctxProximaPeca.beginPath()
      this.ctxProximaPeca.moveTo(quadrado.p1.x + 10, quadrado.p1.y + 10)
      this.ctxProximaPeca.lineTo(quadrado.p2.x + 10, quadrado.p2.y + 10)
      this.ctxProximaPeca.lineTo(quadrado.p3.x + 10, quadrado.p3.y + 10)
      this.ctxProximaPeca.lineTo(quadrado.p4.x + 10, quadrado.p4.y + 10)
      this.ctxProximaPeca.fill()
    })
    // this.ctxProximaPeca.fillStyle = 'black'
    // this.ctxProximaPeca.strokeStyle = '#000000'
    // this.ctxProximaPeca.lineWidth = 10
    // this.ctxProximaPeca.fill()
    // context.strokeStyle = '#0000FF'; // azul
  }

}