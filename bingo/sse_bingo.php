<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');

$counter = 0;

while (true) {

    // Simula a geração de dados no servidor
    $data = "Contador: " . $counter++;

    // Envia os dados para o cliente
    echo "data: " . json_encode($data) . "\n\n";
    flush(); // Certifica-se de que os dados são enviados imediatamente

    // Aguarda por um curto período antes de enviar a próxima atualização
    sleep(1);
}
?>