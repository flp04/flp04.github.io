<?php 

    // Permitir o acesso de qualquer origem
    header('Access-Control-Allow-Origin: *');
    
    // Permitir métodos HTTP específicos
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    
    // Permitir cabeçalhos personalizados e outros cabeçalhos adicionais
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Recebe o JSON enviado no corpo da solicitação
        $json = file_get_contents('php://input');
    
        // Converte o JSON para um objeto ou array PHP
        $data = json_decode($json);
        // Verifica se a decodificação do JSON foi bem-sucedida
        if ($data === null) {
            // Erro ao decodificar o JSON
            http_response_code(400); // Bad Request
            echo json_encode(['error' => 'Erro ao decodificar o JSON']);
        } else {
            // JSON recebido com sucesso, faça o processamento necessário
            // Aqui você pode acessar os dados do JSON usando $data
    

            file_put_contents('dados.json', json_encode($data));

            // Exemplo: Imprime o conteúdo do JSON recebido
            echo json_encode(['message' => 'JSON recebido com sucesso', 'data' => $data]);
        }
    } else {
        // Método de solicitação inválido
        http_response_code(405); // Method Not Allowed
        echo json_encode(['error' => 'Método de solicitação inválido']);
    }
?>