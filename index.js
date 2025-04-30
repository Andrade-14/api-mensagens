const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let mensagens = []; // Array para armazenar as mensagens em memória
let nextId = 1; // Gerador de ID para mensagens

// Criar uma nova mensagem (POST /mensagens)
app.post('/mensagens', (req, res) => {
    const { conteudo } = req.body;

    if (!conteudo) {
        return res.status(400).send({ error: 'O campo "conteudo" é obrigatório.' });
    }

    const novaMensagem = { id: nextId++, conteudo };
    mensagens.push(novaMensagem);
    res.status(201).send(novaMensagem);
});

// Listar todas as mensagens (GET /mensagens)
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});

// Obter uma mensagem específica por ID (GET /mensagens/:id)
app.get('/mensagens/:id', (req, res) => {
    const { id } = req.params;
    const mensagem = mensagens.find(m => m.id === parseInt(id));

    if (!mensagem) {
        return res.status(404).send({ error: 'Mensagem não encontrada.' });
    }

    res.send(mensagem);
});

// Atualizar o conteúdo de uma mensagem (PUT /mensagens/:id)
app.put('/mensagens/:id', (req, res) => {
    const { id } = req.params;
    const { conteudo } = req.body;

    if (!conteudo) {
        return res.status(400).send({ error: 'O campo "conteudo" é obrigatório.' });
    }

    const mensagem = mensagens.find(m => m.id === parseInt(id));

    if (!mensagem) {
        return res.status(404).send({ error: 'Mensagem não encontrada.' });
    }

    mensagem.conteudo = conteudo;
    res.send(mensagem);
});

// Deletar uma mensagem por ID (DELETE /mensagens/:id)
app.delete('/mensagens/:id', (req, res) => {
    const { id } = req.params;
    const index = mensagens.findIndex(m => m.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ error: 'Mensagem não encontrada.' });
    }

    mensagens.splice(index, 1);
    res.status(204).send();
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});