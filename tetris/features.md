Tetris (1985) é um jogo eletronico de quebra cabeça que utiliza tetraminós, segundo a regra dos poliminós. Utilizamos sete tetraminós livres, com liberdade para rotacionar e espelhar. Sua figura e simétrica contam como uma só. [I, O, T, J, L, S, Z]. A partir os chamaremos de peças.
O jogo consiste em empilhar os tetraminós - partir daqui chamaremos de peças - que descem na tela de forma que completem linhas horizontais. Quando uma linha se forma, ela se desintegra, as camadas superiores descem e o jogador ganha pontos.


Organizar o projeto

1° criar as pecas (pontos de pixel organizados na tela conforme coordenadas; cada uma delas tem n posições de translação)

Não devo poder atravessar um objeto. Se ao tentar mover para direita ou esquerda, houver um objeto no caminho, o movimento deve ser negado (ao invés de travar o objeto em declínio entrando no objeto já existente na tela)