// document.getElementById('inputTeclado').focus()
fetch('http://127.0.0.1:5000/palavraSecreta')
.then(response => response.json())
.then(data => {
  document.getElementById('dica').textContent = data.dica
  let palavra = data.palavra
  let palavraFormada = []
  for (let i = 0; i < palavra.length; i++) {
    let divPalavraSecreta = document.getElementById('palavra-secreta')
    let divLetra = document.createElement('div')
    divLetra.setAttribute('class', 'letter-box')
    divPalavraSecreta.appendChild(divLetra)
    palavraFormada.push('')
  }

  const container = document.querySelector('#jogo')
  const fireworks = new Fireworks.default(container)
  function startFogos() {
    fireworks.start()
  }

  document.addEventListener('keydown', (event) => {
    tecla = event.key
    if (/^[a-zA-Z]$/.test(tecla)) {
      if(palavra.toLowerCase().includes(tecla.toLowerCase())) {
        for (let i in palavra) {
          if (palavra[i].toLowerCase() == tecla.toLowerCase()) {
            document.getElementById('palavra-secreta').children[i].textContent = tecla.toUpperCase()
            palavraFormada[i] = tecla
          }
          if (palavra.toLowerCase() == palavraFormada.join('').toLocaleLowerCase()) {
            startFogos()
          }
        }
      } else {
        let foi = false
        partes = ['cabeca','corpo','braco esquerdo','braco direito','perna esquerda','perna direita']
        boneco = document.getElementById('boneco-palito')
        for (let i in partes) {
          if (!foi && document.getElementById(partes[i]).style.display == 'none') {
            document.getElementById(partes[i]).style.display = 'block'
            foi = true
          }
        }
      }
    }
  })
})