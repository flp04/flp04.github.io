<?php

  // Permitir solicitações de qualquer origem (*)
  header('Access-Control-Allow-Origin: *');
  // Permitir solicitações com os métodos GET e POST
  header('Access-Control-Allow-Methods: GET, POST');
  // Permitir os cabeçalhos "Content-Type" e "Authorization"
  header('Access-Control-Allow-Headers: Content-Type, Authorization');
  // Definir o cabeçalho de resposta como JSON
  header('Content-Type: application/json');

  // if (isset($_GET['code'])) {
  //   $code = $_GET['code'];
  // } else {
  //   $code = 'BSA';
  // }

  // football-data.org https://www.football-data.org/
  $uri = 'http://api.football-data.org/v4/matches/435988';
  // $uri = 'http://api.football-data.org/v4/matches/'. $code;
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $match = file_get_contents($uri, false, $stream_context);
  // $match = json_decode($competition);
  echo $match;
  // print_r(json_encode(['dados' => $competition, 'partidas' => $partidas]));

?>