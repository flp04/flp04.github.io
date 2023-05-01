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

    // $requisicao = $_POST['requisicao'];

    // $uri = 'http://api.football-data.org/v4/competitions/CLI/standings';
    // $reqPrefs['http']['method'] = 'GET';
    // $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    // $stream_context = stream_context_create($reqPrefs);
    // $response = file_get_contents($uri, false, $stream_context);
    // $standings = json_encode($response);
    // // echo $standings;

    $uri = 'http://api.football-data.org/v4/competitions/CLI/matches';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $matches = json_encode($response);
    echo $matches;
    // echo json_encode([$standings, $matches)];
    // $competition = ['standings' => $standings, 'matches' => $matches];
    // echo json_encode($dados);

    // switch ($requisicao) {
    //     case 'classificacao':
    //         $uri = 'http://api.football-data.org/v4/competitions/CLI/standings';
    //         $reqPrefs['http']['method'] = 'GET';
    //         $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    //         $stream_context = stream_context_create($reqPrefs);
    //         $response = file_get_contents($uri, false, $stream_context);
    //         $standings = json_encode($response);
    //         // $req = $standings;
    //         echo $standings;
    //         break;
    //     case 'partidas':
    //         $uri = 'http://api.football-data.org/v4/competitions/CLI/standings';
    //         $reqPrefs['http']['method'] = 'GET';
    //         $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    //         $stream_context = stream_context_create($reqPrefs);
    //         $response = file_get_contents($uri, false, $stream_context);
    //         $matches = json_encode($response);
    //         echo $matches;
    //         break;
    // }
    // switch ($requisicao) {
    //     case 'classificacao':
    //         echo $standings;
    //         break;
    //     case 'partidas':
    //         echo $matches;
    //         break;
    // }


?>