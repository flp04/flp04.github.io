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
  // $competitions = json_decode($response);
  // echo print_r($competitions);
  // foreach ($competitions->competitions as $c) {
  //   echo $c->code . ' ';
  //   $pl = $c->code;
  //   $uri = 'http://api.football-data.org/v4/competitions/' . $pl . '/standings';
  //   $reqPrefs['http']['method'] = 'GET';
  //   $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  //   $stream_context = stream_context_create($reqPrefs);
  //   $response = file_get_contents($uri, false, $stream_context);
  // }
    // echo print_r($competitions);
// foreach ($competitions->competitions as $c) {
  // $pl = $c->code . ' ';
  // echo $pl;
//   $uri = 'http://api.football-data.org/v4/competitions/' . $pl . '/standings';
//   $reqPrefs['http']['method'] = 'GET';
//   $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
//   $stream_context = stream_context_create($reqPrefs);
//   $response = file_get_contents($uri, false, $stream_context);
//   // $matches = json_decode($response);
//   $torneios[] = json_decode($response);
// }  
  // $uri = 'http://api.football-data.org/v4/competitions/' . $competitions->competitions[0]->code .'/standings';
  // $uri = 'http://api.football-data.org/v4/competitions/PL/standings';
  //   $reqPrefs['http']['method'] = 'GET';
  //   $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  //   $stream_context = stream_context_create($reqPrefs);
  //   $response = file_get_contents($uri, false, $stream_context);
  //   $competitions = $json_decode($response);
  // dd($competitions);
// foreach ($competitions->competitions as $competition){
//   $uri = 'http://api.football-data.org/v4/competitions/' . $competition->code .'/standings';
//     $reqPrefs['http']['method'] = 'GET';
//     $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
//     $stream_context = stream_context_create($reqPrefs);
//     $response = file_get_contents($uri, false, $stream_context);
// }

// echo $competitions->competitions[0]->code;
$uri = 'http://api.football-data.org/v4/competitions/BSA/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

$uri = 'http://api.football-data.org/v4/competitions/PL/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  $uri = 'http://api.football-data.org/v4/competitions/SA/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  $uri = 'http://api.football-data.org/v4/competitions/PPL/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  $uri = 'http://api.football-data.org/v4/competitions/BL1/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  $uri = 'http://api.football-data.org/v4/competitions/DED/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  $uri = 'http://api.football-data.org/v4/competitions/FL1/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);
  
  $uri = 'http://api.football-data.org/v4/competitions/PD/standings';
  $reqPrefs['http']['method'] = 'GET';
  $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
  $stream_context = stream_context_create($reqPrefs);
  $response = file_get_contents($uri, false, $stream_context);
  // $matches = json_decode($response);
  $competitions[] = json_decode($response);

  // var_dump($matches);

// Converter os dados em PHP para JSON e enviar como resposta
// echo json_encode($competitions);
  $nome_arquivo = 'resultado.json';
  $handle = fopen($nome_arquivo, 'w');
  fwrite($handle, json_encode($competitions));
  fclose($handle);
  echo 'arquivo salvo';
?>