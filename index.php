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

// Converter os dados em PHP para JSON e enviar como resposta
echo json_encode($dados);
?>