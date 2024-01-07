Concepção
O projeto prevê um sistema que gere cartelas de bingo, sorteie números aleatórios e permita a visualização e marcação da cartela através de uma interface web. O sistema nasce com o objetivo de ser utilizado em uma dinâmica no retorno de fim de ano de um grupo de trabalho. Mas não descarta a possibilidade de ser utilizado em ocasiões parecidas, contanto que mantenha seu carater recreativo.

Domínio
O Bingo é um jogo de azar.
Bolas numeradas de 1 a 75 são colocadas dentro de um globo e sorteadas uma a uma. Os números devem ser marcados em cartelas, geralmente com 24 números dispostos em cinco colunas e cinco linhas. Cada coluna recebe uma faixa de números específica, distribuidas da seguinte forma: 1-15, 16-30, 31-45, 46-60, 61-75; facilitando a visualização e localização dos números. O vencedor pode ser determinado como o primeiro a completar uma linha (horizontal, transversal ou vertical) e/ou o primeiro a completar toda a cartela. O jogador vencedor deve alertar com a palavra "linha" ou "bingo" para validar sua vitória, após conferência da marcação da tabela em relação aos números sorteados. Quando a cartela inteira é completa e após a conferência do alerta de bingo, o sorteio é interrompido.
Essas são regras comumente usadas - e que usaremos para o desenvolvimento do projeto-, mas podem variar: por exemplo o número de bolas, formato das cartelas ou critérios para determinar o vencedor.
No Brasil, a exploração comercial do jogo de bingo é proibida, sendo permitida apenas em atividades sem fins lucrativos, como neste projeto.

Requisitos funcionais
- Identificar os usuarios através do nome (e se houver mais de um jogador com mesmo nome?)
- Sortear e exibir para todos os usúarios identificados um número único e aleatório, entre 1 e 75, a cada 30 segundos.
- Gerar e exibir cartelas de cinco colunas e cinco linhas, com 24 números aleatórios entre 1 e 75, distribuidos entre as colunas do primeiro ao décimo quinto número da sequência (1-15, 16-30, 31-45, 46-60, 61-75).  (teremos possibilidade de jogar com mais de uma cartela? até quantas?)
- Permitir a marcação nas cartelas, contanto que o número já tenha sido sorteado.
- Permitir que o usuario informe quando completar uma linha ou a cartela completa, paralisando o sorteio e informando os demais usuarios.
- Um administrador irá iniciar o sorteio e visualizar todos os usuarios identificados

Requisitos não funcionais
- Uma interface web desenvolvida com Vue.js e Bootstrap
- Um websocket para transmissão dos dados entre os usuarios (no momento estou usando o PieSocket)
- Uma notificação de que o sistema tem fins recreativos, frente a proibição da exploração do bingo como jogo de azar

Histórias de usuario
Como administrador, eu preciso me autenticar
Como administrador, eu quero poder iniciar o jogo
Como administrador, eu quero poder visualizar os jogadores
Como administrador, eu quero poder validar as vitórias (de linhas e bingo)
Como jogador, eu quero poder me identificar com meu nome
Como jogador, eu quero poder visualizar minha cartela
Como jogador, eu quero poder visualizar os números sorteados
Como jogador, eu quero poder marcar os números sorteados na minha cartela
Como jogador, eu quero poder gritar bingo
Como jogador, eu quero poder gritar linha