<?php
    // Permitir solicitações de qualquer origem (*)
    header('Access-Control-Allow-Origin: *');
    // Permitir solicitações com os métodos GET e POST
    header('Access-Control-Allow-Methods: GET, POST');
    // Permitir os cabeçalhos "Content-Type" e "Authorization"
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    // header('Content-Type: text/plain');

    // Definir o cabeçalho de resposta como JSON
    header('Content-Type: application/json');

    $uri = 'http://api.football-data.org/v4/competitions/CLI/standings';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $standings = json_encode($response);
    echo 'classificação ok';

    // Converter os dados em PHP para JSON e enviar como resposta
    $nome_arquivo = 'libertadores.json';
    $handle = fopen($nome_arquivo, 'w');
    fwrite($handle, $standings);
    fclose($handle);
    echo 'arquivo salvo <br>';

    $uri = 'http://api.football-data.org/v4/competitions/CLI/matches';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: bef4843a927541c5b894ff0c1d3c78ae';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $matches = json_encode($response);
    echo 'partidas ok';

    // Converter os dados em PHP para JSON e enviar como resposta
    $nome_arquivo = 'libertadores_partidas.json';
    $handle = fopen($nome_arquivo, 'w');
    fwrite($handle, $matches);
    fclose($handle);
    echo 'arquivo salvo <br>';
?>