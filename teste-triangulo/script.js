var controle = false
var escala = 1

class Ponto {
  constructor(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
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
    const ab = Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2));
    const bc = Math.sqrt(Math.pow((this.b.x - this.c.x), 2) + Math.pow((this.b.y - this.c.y), 2));
    const ca = Math.sqrt(Math.pow((this.c.x - this.a.x), 2) + Math.pow((this.c.y - this.a.y), 2));
    return (ab < bc + ca) && (bc < ca + ab) && (ca < ab + bc) ? true : false;
  }

  tipo() {
    if (this.ab == this.bc && this.bc == this.ca) {
      return 'equilatero'
    } else {
      return 'não equilatero'
    }
  }
}

function criar () {
  let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
  let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
  let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
  const triangulo = new Triangulo(p1, p2, p3);
  if (triangulo.isTriangulo()) {
    // console.log(triangulo.tipo())
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
  document.getElementById('valor-translacao').value = 1

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
  // const triangulo = new Triangulo(p1, p2, p3);
  // if (triangulo.isTriangulo()) {
  // } else {
  //   alert('Estas cordenadas não formam um triangulo')
  // }
}

function escalar () {
  // let escala = parseFloat(prompt('Informe o número para escalar'))
  let novaEscala = parseFloat(document.getElementById('valor-escala').value)
  // let escala = document.getElementById('escala').value
  // return console.log(escala)
  let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
  let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
  let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
  p1.escalar(novaEscala)
  p2.escalar(novaEscala)
  p3.escalar(novaEscala)
  escala = novaEscala
  document.getElementById('valor-escala').value = 1
  document.getElementById('p1-x').value = p1.x
  document.getElementById('p1-y').value = p1.y
  document.getElementById('p2-x').value = p2.x
  document.getElementById('p2-y').value = p2.y
  document.getElementById('p3-x').value = p3.x
  document.getElementById('p3-y').value = p3.y
  draw(p1, p2, p3)
}

function transladar (direcao) {
  // let options = [
  //   'direita',
  //   'esquerda',
  //   'cima',
  //   'baixo',
  // ]
  // let selectedOption;
  // Swal.fire({
  //   title: 'Selecione a direção da translação',
  //   input: 'select',
  //   inputOptions: options,
  //   inputPlaceholder: 'Selecione',
  //   showCancelButton: true,
  //   inputValidator: (value) => {
  //     if (!value) {
  //       return 'Você precisa selecionar uma opção';
  //     }
  //   }
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     selectedOption = result.value;
  //     let valor = parseFloat(prompt('Informe o número para transladar'))
  //     let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
  //     let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
  //     let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
  //     p1.transladar(valor, selectedOption)
  //     p2.transladar(valor, selectedOption)
  //     p3.transladar(valor, selectedOption)
  //     document.getElementById('p1-x').value = p1.x
  //     document.getElementById('p1-y').value = p1.y
  //     document.getElementById('p2-x').value = p2.x
  //     document.getElementById('p2-y').value = p2.y
  //     document.getElementById('p3-x').value = p3.x
  //     document.getElementById('p3-y').value = p3.y
  //     draw(p1, p2, p3)
  //     console.log('Opção selecionada:', selectedOption);
  //   }
  // })
    let valor = parseFloat(document.getElementById('valor-translacao').value)
    let p1 = new Ponto(document.getElementById('p1-x').value, document.getElementById('p1-y').value)
    let p2 = new Ponto(document.getElementById('p2-x').value, document.getElementById('p2-y').value)
    let p3 = new Ponto(document.getElementById('p3-x').value, document.getElementById('p3-y').value)
    p1.transladar(valor, direcao)
    p2.transladar(valor, direcao)
    p3.transladar(valor, direcao)
    document.getElementById('p1-x').value = p1.x
    document.getElementById('p1-y').value = p1.y
    document.getElementById('p2-x').value = p2.x
    document.getElementById('p2-y').value = p2.y
    document.getElementById('p3-x').value = p3.x
    document.getElementById('p3-y').value = p3.y
    draw(p1, p2, p3)
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

    ctx.fill();
  }
}

let i = 1
const canvas = document.getElementById("canvas")
canvas.addEventListener('click', function(event) {
  const rect = canvas.getBoundingClientRect(); // Obtém o tamanho e a posição do canvas na página
  const x = event.clientX - rect.left; // Obtém a posição X do clique em relação ao canvas
  const y = event.clientY - rect.top; // Obtém a posição Y do clique em relação ao canvas
  document.getElementById(`p${i}-x`).value = x
  document.getElementById(`p${i}-y`).value = y
  if (i >= 3) {
    i = 1
  } else {
    i++
  }
  // i = i >= 3 ? 0 : i++
  console.log(i)
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
