var controle = false
var escala = 1

class Ponto {
  constructor(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
  }

  set(x, y) {
    this.x = x
    this.y = y
    console.log(this)
  }

  escalar(valor) {
    this.x *= valor
    this.y *= valor
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
      default:
        console.log(valor, sentido)
    }
  }
}

class Triangulo {
  constructor(p1, p2, p3) {
    this.a = p1;
    this.b = p2;
    this.c = p3;
    this.ab = Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2))
    this.bc = Math.sqrt(Math.pow((this.b.x - this.c.x), 2) + Math.pow((this.b.y - this.c.y), 2))
    this.ca = Math.sqrt(Math.pow((this.c.x - this.a.x), 2) + Math.pow((this.c.y - this.a.y), 2))
  }

  isTriangulo() {
    // this.ab = Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2));
    // this.bc = Math.sqrt(Math.pow((this.b.x - this.c.x), 2) + Math.pow((this.b.y - this.c.y), 2));
    // this.ca = Math.sqrt(Math.pow((this.c.x - this.a.x), 2) + Math.pow((this.c.y - this.a.y), 2));
    return (this.ab < this.bc + this.ca) && (this.bc < this.ca + this.ab) && (this.ca < this.ab + this.bc) ? true : false;
  }

  tipo() {
    if (this.ab == this.bc && this.bc == this.ca) {
      return 'equilatero'
    } else {
      return 'não equilatero'
    }
  }
}

class Main {
  constructor() {
    this.p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
    this.p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
    this.p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
    this.triangulo = null
  }

  setPonto(ponto) {
    switch (ponto) {
      case 'p1':
        this.p1.set(parseFloat(document.getElementById('p1-x').value), parseFloat(document.getElementById('p1-y').value))
        break
      case 'p2':
        this.p2.set(parseFloat(document.getElementById('p2-x').value), parseFloat(document.getElementById('p2-y').value))
        break
      case 'p3':
        this.p3.set(parseFloat(document.getElementById('p3-x').value), parseFloat(document.getElementById('p3-y').value))
        break
    }
  }

  atualizarInputsPonto() {
    document.getElementById('p1-x').value = this.p1.x
    document.getElementById('p1-y').value = this.p1.y
    document.getElementById('p2-x').value = this.p2.x
    document.getElementById('p2-y').value = this.p2.y
    document.getElementById('p3-x').value = this.p3.x
    document.getElementById('p3-y').value = this.p3.y
  }

  renderizarTriangulo() {
    this.triangulo = new Triangulo(this.p1, this.p2, this.p3)
    if (this.triangulo.isTriangulo()) {
      draw(this.p1, this.p2, this.p3);
      document.getElementById('orientacao-criacao').setAttribute('hidden', true)
      document.getElementById('escala').removeAttribute('hidden')
      document.getElementById('translacao').removeAttribute('hidden')
      document.getElementById('orientacao-transformacoes').removeAttribute('hidden')
    } else {
      alert('Estas cordenadas não formam um triangulo')
    }
  }
}

var main = new Main()

function criar () {
  let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
  let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
  let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
  const triangulo = new Triangulo(p1, p2, p3);
  if (triangulo.isTriangulo()) {
    draw(p1, p2, p3);
    document.getElementById('orientacao-criacao').setAttribute('hidden', true)
    document.getElementById('escala').removeAttribute('hidden')
    document.getElementById('translacao').removeAttribute('hidden')
    document.getElementById('orientacao-transformacoes').removeAttribute('hidden')
  } else {
    alert('Estas cordenadas não formam um triangulo')
  }
}

function apagar () {
  let p1 = new Ponto(0, 0)
  let p2 = new Ponto(0, 0)
  let p3 = new Ponto(0, 0)
  draw(p1, p2, p3);
  document.getElementById('input-translacao').value = 1
  document.getElementById('escala').setAttribute('hidden', true)
  document.getElementById('translacao').setAttribute('hidden', true)
  document.getElementById('orientacao-transformacoes').setAttribute('hidden', true)
  document.getElementById('orientacao-criacao').removeAttribute('hidden')
  document.getElementById('p1-x').value = p1.x
  document.getElementById('p1-y').value = p1.y
  document.getElementById('p2-x').value = p2.x
  document.getElementById('p2-y').value = p2.y
  document.getElementById('p3-x').value = p3.x
  document.getElementById('p3-y').value = p3.y
  main.triangulo = null
}

function escalar () {
  let escala = parseFloat(document.getElementById('input-escala').value)
  // let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
  // let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
  // let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
  main.p1.escalar(escala)
  main.p2.escalar(escala)
  main.p3.escalar(escala)
  document.getElementById('input-escala').value = 1
  document.getElementById('p1-x').value = main.p1.x
  document.getElementById('p1-y').value = main.p1.y
  document.getElementById('p2-x').value = main.p2.x
  document.getElementById('p2-y').value = main.p2.y
  document.getElementById('p3-x').value = main.p3.x
  document.getElementById('p3-y').value = main.p3.y
  draw(main.p1, main.p2, main.p3)
}

function transladar (direcao) {
    let valor = parseFloat(document.getElementById('input-translacao').value)
    main.p1.transladar(valor, direcao)
    main.p2.transladar(valor, direcao)
    main.p3.transladar(valor, direcao)
    document.getElementById('p1-x').value = main.p1.x
    document.getElementById('p1-y').value = main.p1.y
    document.getElementById('p2-x').value = main.p2.x
    document.getElementById('p2-y').value = main.p2.y
    document.getElementById('p3-x').value = main.p3.x
    document.getElementById('p3-y').value = main.p3.y
    draw(main.p1, main.p2, main.p3)
  }

function draw(p1, p2, p3) {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);

    ctx.fillStyle = 'black'
    ctx.fill();
  }
}

let i = 1
const canvas = document.getElementById("canvas")
canvas.addEventListener('click', function(event) {
  if (!main.triangulo) {
    const rect = canvas.getBoundingClientRect(); // Obtém o tamanho e a posição do canvas na página
    const x = event.clientX - rect.left; // Obtém a posição X do clique em relação ao canvas
    const y = event.clientY - rect.top; // Obtém a posição Y do clique em relação ao canvas
    document.getElementById(`p${i}-x`).value = x
    document.getElementById(`p${i}-y`).value = y
    main.setPonto(`p${i}`)
    if (i >= 3) {
      i = 1
    } else {
      i++
    }
  }
})

// triangulo de teste
// document.getElementById('p1-x').value = 50
// document.getElementById('p1-y').value = 0
// document.getElementById('p2-x').value = 0
// document.getElementById('p2-y').value = 50
// document.getElementById('p3-x').value = 50
// document.getElementById('p3-y').value = 50
// let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
// let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
// let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
// const triangulo = new Triangulo(p1, p2, p3);
// if (triangulo.isTriangulo()) {
//   draw(p1, p2, p3);
//   document.getElementById('escala').removeAttribute('hidden')
//   document.getElementById('translacao').removeAttribute('hidden')
// } else {
//   alert('Estas cordenadas não formam um triangulo')
// }

function segurando() {
  botao = document.getElementById('botao-cima').style.color = 'blue'
  controle = true
  // botao.s
  console.log('segurou')
  controle = true
}

function soltou() {
  botao = document.getElementById('botao-cima').style.color = 'black'
  controle = false
  console.log('soltou')
  controle = false
}


document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp") {
    transladar('cima')
  } else if (event.key === "ArrowDown") {
    transladar('baixo')
  } else if (event.key === "ArrowLeft") {
    transladar('esquerda')
  } else if (event.key === "ArrowRight") {
    transladar('direita')
  }
})

canvas.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  // console.log(mouseX, mouseY)
  const ctx = canvas.getContext("2d")
  let raio = 5
  let distancia = Math.sqrt(Math.pow(mouseX - main.p1.x, 2) + Math.pow(mouseY - main.p1.y, 2));
  if (distancia <= raio) {
    // console.log('achou danado')
  }
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  // ctx.fill();
})

let escalaSoltinha = null

canvas.addEventListener('mousedown', function(event) {
  if (!main.triangulo) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    console.log(mouseX, mouseY)
    const ctx = canvas.getContext("2d")
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
  } else {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    // console.log(mouseX, mouseY)
    const ctx = canvas.getContext("2d")
    let raio = 5
    let distanciaP1 = Math.sqrt(Math.pow(mouseX - main.p1.x, 2) + Math.pow(mouseY - main.p1.y, 2));
    let distanciaP2 = Math.sqrt(Math.pow(mouseX - main.p2.x, 2) + Math.pow(mouseY - main.p2.y, 2));
    let distanciaP3 = Math.sqrt(Math.pow(mouseX - main.p3.x, 2) + Math.pow(mouseY - main.p3.y, 2));
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
    if (distanciaP1 <= raio) {
      // soltei()
      console.log('achou danado 1')
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.fillStyle = 'blue';
      // ctx.fill();
      // ctx.arc(main.p1.x, main.p1.x, 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'red';
      ctx.stroke();
      escalaSoltinha = 'p1'
    } else if (distanciaP2 <= raio) {
      console.log('achou danado 2')
      // ctx.arc(main.p2.x, main.p2.x, 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'red';
      ctx.stroke();
      escalaSoltinha = 'p2'
    } else if (distanciaP3 <= raio) {
      // ctx.arc(main.p3.x, main.p3.x, 5, 0, Math.PI * 2);
      console.log('achou danado 3')
      ctx.strokeStyle = 'red';
      ctx.stroke();
      escalaSoltinha = 'p3'
    } else {
      escalaSoltinha = null
    }
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    // ctx.fill();
  }
})

canvas.addEventListener('mouseup', function(event) {
  if (escalaSoltinha) {
    console.log('eitcha')
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    switch (escalaSoltinha) {
      case 'p1':
        main.p1.set(mouseX, mouseY)
        break
      case 'p2':
        main.p2.set(mouseX, mouseY)
        break
      case 'p3':
        main.p3.set(mouseX, mouseY)
        break
    }
    main.atualizarInputsPonto()
    main.renderizarTriangulo()
  }
  console.log('soltei')
})