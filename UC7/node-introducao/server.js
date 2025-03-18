import express from 'express';
import path from 'path';
import fs from 'fs';

// Criação do servidor
const app = express();
const port = 3000;
const __dirname = path.resolve();

// Configuração do express
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Rota para a página de login
app.get('/views/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para a página de cadastro
app.get('/views/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro.html'));
});

// Rota para cadastrar funcionários
app.post('/api/funcionarios', (req, res) => {
    const filePath = path.join(__dirname, "data", "funcionarios.json");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Erro ao ler arquivo");
        }
        const dados = JSON.parse(data);
        const funcionario = req.body;
        dados.push(funcionario);
        fs.writeFile(filePath, JSON.stringify(dados, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Erro ao salvar arquivo");
            }
            res.status(201).send("Funcionário cadastrado com sucesso");
        });
    });
});

// Rota para listar funcionários
app.get('/api/funcionarios', (req, res) => {
    const filePath = path.join(__dirname, "data", "funcionarios.json");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Erro ao ler arquivo");
        }
        res.status(200).send(data);
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});