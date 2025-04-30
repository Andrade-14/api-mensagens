# API Mensagens

## Descrição
Esta API permite o gerenciamento de mensagens com operações CRUD (Criar, Ler, Atualizar, Deletar). Foi desenvolvida utilizando Node.js com o framework Express.

## Endpoints da API

### Criar uma nova mensagem
- **Método**: POST
- **Endpoint**: `/mensagens`
- **Corpo da Requisição**:
```json
{
  "conteudo": "Texto da nova mensagem."
}
```
- **Resposta**: Retorna o objeto da mensagem criada.

---

### Listar todas as mensagens
- **Método**: GET
- **Endpoint**: `/mensagens`
- **Resposta**: Retorna um array com todas as mensagens.

---

### Obter uma mensagem específica por ID
- **Método**: GET
- **Endpoint**: `/mensagens/{id}`
- **Resposta**: Retorna o objeto da mensagem correspondente ao ID.

---

### Atualizar o conteúdo de uma mensagem
- **Método**: PUT
- **Endpoint**: `/mensagens/{id}`
- **Corpo da Requisição**:
```json
{
  "conteudo": "Novo texto da mensagem."
}
```
- **Resposta**: Retorna o objeto da mensagem atualizada.

---

### Deletar uma mensagem por ID
- **Método**: DELETE
- **Endpoint**: `/mensagens/{id}`
- **Resposta**: Retorna o status 204 (sem conteúdo).

## Executando no GitHub Codespaces

1. Certifique-se de que o ambiente no Codespaces está configurado para Node.js.
2. Instale as dependências com o comando:
   ```
   npm install
   ```
3. Inicie o servidor com:
   ```
   npm start
   ```
4. Acesse a URL base gerada pelo Codespaces no navegador ou Postman.

## Testes no Postman
- Configure uma variável de ambiente no Postman com a URL base da API gerada pelo Codespaces.
- Implemente as requisições para cada um dos endpoints acima.
- Exporte a coleção do Postman como um arquivo `.json` e adicione ao repositório.

## Licença
Este projeto está licenciado sob a licença MIT.