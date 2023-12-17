<?php
  // Permitir solicitações de qualquer origem (*)
  header('Access-Control-Allow-Origin: *');
  // Permitir solicitações com os métodos GET e POST
  header('Access-Control-Allow-Methods: GET, POST');
  // Permitir os cabeçalhos "Content-Type" e "Authorization"
  header('Access-Control-Allow-Headers: Content-Type, Authorization');
  // Definir o cabeçalho de resposta como JSON
  header('Content-Type: application/json');

  function gerarCartela() {
    $numeros = [[], [], [], [], []];
    $j = 1;
    $cont = 15;
    for ($i = 0; $i < 5; $i++) {
      for ($j; $j <= $cont; $j++) {
        $numeros[$i][] = ($j);
      }
      $j = $cont + 1;
      $cont += 15;
    }
    // this.dezenas = $numeros
    // console.log(numeros)
    $cartelas = [[], [], [], [], []];
    for ($i = 0; $i < 5; $i++) {
      for ($j = 0; $j < 5; $j++) {
        if ($i == 2 && $j == 2) {
          $cartelas[$j][] = ('C');
        } else {
          // cartelas[$j].push(numeros[$i].splice([Math.floor(Math.random() * $numeros[$i].length)], 1)[0])
          $cartelas [$j][] = 'oi';
        }
      }
    }
    echo json_encode($cartelas);
    // console.log(cartelas)
    // this.cartela = cartelas
    // return cartelas
  }
},



  echo "Hello World";
?>