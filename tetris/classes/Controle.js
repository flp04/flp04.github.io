export default class ControlesUsuario {
  constructor (controle) {
    // CONTROLES DO TECLADO
    document.addEventListener('keydown', function(event) {
      if (event.key == 'Enter') {
        if (controle.looping) {
          // parar looping
          clearInterval(controle.looping)
          controle.looping = null
        } else {
          // iniciar/continuar looping
          controle.iniciarJogo()
        }
      }
    
      /* TODO 
        COLOCAR UMA SEGUNDA CONDIÇÃO PARA VERIFICAR SE A PEÇA SAIRÁ DA TELA AO GIRAR
        */
      if (controle.pecaEmQueda) { 
        if (event.key === "ArrowUp") {
          controle.pecaEmQueda.girar()
        } else if (event.key === "ArrowDown") {
          controle.pecaEmQueda.transladar('baixo', controle)
          controle.placar.setPontos(1)
        } else if (event.key === "ArrowLeft") {
          controle.pecaEmQueda.transladar('esquerda', controle)
        } else if (event.key === "ArrowRight") {
          controle.pecaEmQueda.transladar('direita', controle)
        }
        controle.canvas.desenhar(controle.pecasAcumuladas)
      }
    })

    // CONTROLES DO CELULAR
    document.getElementById('botao-cima').addEventListener('click', function() {
      controle.pecaEmQueda.girar()
    })
    document.getElementById('botao-esquerda').addEventListener('click', function() {
      controle.pecaEmQueda.transladar('esquerda')
    })
    document.getElementById('botao-direita').addEventListener('click', function() {
      controle.pecaEmQueda.transladar('direita')
    })
    document.getElementById('botao-baixo').addEventListener('click', function() {
      controle.pecaEmQueda.transladar('baixo')
    })
  }
}