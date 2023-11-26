<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  // Credenciais do banco de dados
  $servername = "localhost";
  $username = "id20775278_root";
  $password = "Hungria*8";
  $database = "id20775278_laravel";

  // Cria a conexão com o banco de dados
  $conn = new mysqli($servername, $username, $password, $database);

  // Verifica se houve algum erro na conexão
  if ($conn->connect_error) {
      die("Conexão falhou: " . $conn->connect_error);
  }

  if ($_GET['requisicao'] == 'pegarTarefas') {
    // Consulta SQL para selecionar dados da tabela
    $sql = "SELECT tarefas.*, frequencias.nome as frequencia FROM tarefas LEFT JOIN frequencias ON tarefas.frequencia_id = frequencias.id";
    $result = $conn->query($sql);

    $dados = [];
    // Verificar se existem dados na tabela
    if ($result->num_rows > 0) {
      // Exibir dados de cada linha
      while($row = $result->fetch_assoc()) {
        $dados[] = $row;
      }
    }
    echo json_encode($dados);
  }
  
  if ($_GET['requisicao'] == 'criarTarefa') {
    // Obtém os dados do formulário
    $dados = json_decode(file_get_contents("php://input"), true);
    $nome = $dados["nome"];
    $status_id = 1;
    // $cpf = $dados["cpf"];
    // $agua_potavel = $dados["aguaPotavel"];
    // $rede_esgoto = $dados["redeEsgoto"];
    // $drenagem = $dados["drenagem"];
    // $coleta_lixo = $dados["coletaLixo"];
    // $pontos = $dados["pontos"];

    // Preparar a declaração SQL para inserir dados no banco de dados
    $sql = "INSERT INTO tarefas (nome, status_id) VALUES ('$nome', '$status_id')";

    // Executar a declaração SQL
    if ($conn->query($sql) === TRUE) {
      echo json_encode($dados);
        // echo "Dados cadastrados com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
  }

  if ($_GET['requisicao'] == 'deletarTarefa') {
    // Obtém os dados do formulário
    $dados = json_decode(file_get_contents("php://input"), true);
    $atividade_id = $dados["atividade_id"];

    // Preparar a declaração SQL para inserir dados no banco de dados
    $sql = "DELETE FROM tarefas WHERE id = $atividade_id";

    // Executar a declaração SQL
    if ($conn->query($sql) === TRUE) {
      echo json_encode($dados);
        // echo "Dados cadastrados com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
  }
?>