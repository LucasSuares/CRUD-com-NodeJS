const express = require('express');

const server = express();

server.use(express.json());

const stack = ['html5', 'css3', 'javascript','python', 'reactJS', 'nodeJS']

// Retorna uma ferramenta (tech)
server.get('/stack/:index', (req, res) => {
    const {index} = req.params;
    return res.json(stack[index]);
})

// Retorna a stack completa
server.get('/stack', (req, res) => {
    return res.json(stack);
})

// Add uma ferramenta (tech)
server.post('/stack', (req, res) => {
    const {name} = req.body;
    stack.push(name);
    return res.json(stack);
})

// Atualizar uma ferramenta (tech)
server.put('/stack/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    stack[index] = name;
    return res.json(stack);
})

// Deletar uma ferramenta (tech)
server.delete('/stack/:index', (req, res) => {
    const {index} = req.params;
    stack.splice(index, 1)
    return res.json({message: 'A tech foi deletada'});
})

server.listen(3000);