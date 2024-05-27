Tetris (1985) é um jogo eletronico de quebra cabeça que utiliza tetraminós, segundo a regra dos poliminós. Utilizamos sete tetraminós livres - que a partir daqui chamaremos de peças -, com liberdade para rotacionar e espelhar. Sua figura e simétrica contam como uma só. [I, O, T, J, L, S, Z].
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

Organizar o projeto

1° criar as pecas (pontos de pixel organizados na tela conforme coordenadas; cada uma delas tem n posições de translação)

Não devo poder atravessar um objeto. Se ao tentar mover para direita ou esquerda, houver um objeto no caminho, o movimento deve ser negado (ao invés de travar o objeto em declínio entrando no objeto já existente na tela)