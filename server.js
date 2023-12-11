const express = require('express');
const app = express();

// Configure o diretório de arquivos estáticos (por exemplo, 'public')
app.use(express.static('src'));

// Resto da configuração do servidor

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor está executando na porta 3000');
});
