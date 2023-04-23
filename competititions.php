<?php

// Permitir solicitações de qualquer origem (*)
header('Access-Control-Allow-Origin: *');
// Permitir solicitações com os métodos GET e POST
header('Access-Control-Allow-Methods: GET, POST');
// Permitir os cabeçalhos "Content-Type" e "Authorization"
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Arquivo PHP (arquivo.php)

// Dados em PHP
$dados = array(
  'nome' => 'João',
  'idade' => 30,
  'cidade' => 'São Paulo'
);

// Definir o cabeçalho de resposta como JSON
header('Content-Type: application/json');

$uri = 'http://api.football-data.org/v4/competitions/';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  $competitions = json_decode($response);
  echo print_r($competitions);

  ?>