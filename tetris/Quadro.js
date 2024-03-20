export default class Quadro {
  constructor () {
    this.pecas = []
  }

  novaPeca(peca = null) {
    this.pecas.push(peca)
    // peca.cair()
  }

  cair(peca) {
    pecaCaindo = peca
    var intervalo = setInterval(() => {
      let pecaComPeca = false
      // console.warn(this.pecas)
      this.pecas.forEach(el => {
        if (pecaCaindo != el) {
          if ((pecaCaindo.p2.y >= Math.min(el.p1.y, el.p4.y) || pecaCaindo.p3.y >= Math.min(el.p1.y, el.p4.y)) && 
          (pecaCaindo.p2.x == el.p1.x && pecaCaindo.p3.x == Math.min(el.p4.x))) {
            pecaComPeca = true
            console.warn(pecaCaindo)
            console.warn(el)
          }
        }
      })
      if (!peca.tocou() && !pecaComPeca) {
        peca.mover('baixo')
        peca.desenhar('baixo')
        peca.desenhar('direita')
        peca.desenhar('baixo')
      } else {
        clearInterval(intervalo)
        this.pecas.push(new Peca([[0, 0], [0, 10], [10, 10], [10, 0]]))
        pecaCaindo = this.pecas[this.pecas.length - 1]
        this.cair(this.pecas[this.pecas.length - 1])
      }
    }, 1000);
  }

  static draw(p1, p2, p3, p4) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.beginPath();
      // x.pecas.forEach(el => {
      //   tracar(ctx, el.p1, el.p2, el.p3, el.p4)
      //   // tracar(ctx, element[0], )
      // })
      // tracar(ctx, p1, p2, p3, p4)
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
  
      ctx.fillStyle = 'black'
      ctx.fill();
    }
  }
  
  tracar(ctx, p1, p2, p3, p4) {
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
  }
  
  desenharSemApagar(p1, p2, p3, p4) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
  
      ctx.fillStyle = 'black'
      ctx.fill();
    }
  }

}
