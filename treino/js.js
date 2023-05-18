const fs = require('fs');

// Caminho para o arquivo JSON
const caminhoArquivo = 'caminho/do/arquivo.json';

// Carregar o conteúdo do arquivo JSON
fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return;
  }

  // Converter o conteúdo do arquivo em um objeto JavaScript
  const objeto = JSON.parse(data);

  // Atualizar os valores do objeto conforme necessário
  objeto.nome = 'João';
  objeto.idade = 26;
  objeto.cidade = 'São Paulo';

  // Converter o objeto JavaScript de volta em uma string JSON
  const jsonAtualizado = JSON.stringify(objeto);

  // Escrever o JSON atualizado de volta no arquivo
  fs.writeFile(caminhoArquivo, jsonAtualizado, 'utf8', err => {
    if (err) {
      console.error('Erro ao atualizar o arquivo JSON:', err);
      return;
    }
    console.log('Arquivo JSON atualizado com sucesso!');
  });
});