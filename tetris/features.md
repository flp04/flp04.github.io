
Tetris (1985) é um jogo eletronico de quebra cabeça que utiliza tetraminós, segundo a regra dos poliminós, como peças. Utilizamos sete tetraminós livres, com liberdade para rotacionar e espelhar. Sua figura e simétrica contam como uma só. Os símbolos que representam o conjunto de tetraminós que formam as peças do Tetris é composto por {I, O, T, J, L, S, Z}.
O jogo consiste em empilhar as peças que descem na tela de forma que completem linhas horizontais. Quando uma linha se forma, ela se desintegra, as camadas superiores descem e o jogador ganha pontos.

Tela de jogo
  - tamanho
  - tamanho dos quadrados

Controles do jogo
  - enter: inicia e pausa o jogo
  - teclas de direção
    - cima: gira a peça
    - esquerda: movimenta a peça para esquerda
    - direita: movimenta a peça para direita
    - baixo: movimenta a peça para baixo

Jogo:
  possui sete peças representadas por tetraminós formados por quatro quadrados
  ao iniciar uma peça aleatória desce do topo da tela podendo ser controlada pelo jogador
  ao tocar a base da peça no chão ou em outra peça a mesma congela e uma outra desce do topo da tela


Requisitos Funcionais
- Exibir uma tela de largura x e altura y para renderizar as interações do jogo
- Um controle que armazene sete tetraminós, chamados de peças, que cairão do topo da tela
- Uma interface que exiba a(s) próxima(s) peça(s) que irão cair
- 
- A possibilidade do usuario mover a peça para os lados e para baixo com as respectivas teclas do teclado
- A possibilidade do usuario girar a peça com a tecla para cima do teclado
- Exibir uma interface de controle em dispositivos móveis para o usuario mover e girar a peça
- Ao usuario mover a peça para baixo ele deve somar x pontos
- Ao usuario completar uma linha horizontal, a mesma deve ser extinta e as linhas acima descerem ocupando seu espaço
- Quando o usuario completar uma linha horizontal ele deve somar (x pontos * o número de linhas que completar) * o level que estiver
- Quando o usuario completar 1000 pontos ele deve subir de nível


Organizar o projeto

1° criar as pecas (pontos de pixel organizados na tela conforme coordenadas; cada uma delas tem n posições de translação)

Não devo poder atravessar um objeto. Se ao tentar mover para direita ou esquerda, houver um objeto no caminho, o movimento deve ser negado (ao invés de travar o objeto em declínio entrando no objeto já existente na tela)
Não devo poder mover o objeto para fora do canva