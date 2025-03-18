import express from "express";
import path from "path";
import fs from "fs";

const app =  express();
const PORT = 3000;

const __dirname = path.resolve();
const __dirItens = path.resolve(__dirname, "data", "itens.json");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo a minha API! Os comandos estarão na rota /api");
})

app.get("/api/itens", (req, res) => {
    try{
        fs.readFile(__dirItens, "utf8", (err, data) => {
            if (err) {
                return res.status(500).json({ erro: "Erro ao carregar os itens." });
            }
            else{
                const dataJson = JSON.parse(data);
                if(dataJson.length === 0){
                    return res.status(404).json({ erro: "Arquivo vazio." });
                }
                res.status(200).json(dataJson);
            }
        });
    }
    catch(err){
        return res.status(500).json({ erro: "Erro ao carregar os itens." });
    }
});

app.get("/api/itens/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!id){
        return res.status(400).json({ erro: "ID inválido." });
    }
    try{
        fs.readFile(__dirItens, "utf8", (err, data) => {
            if (err){
                console.log(err);
                return res.status(500).json({ erro: "Erro ao ler o arquivo." });
            } 
            else{
                const dataJson = JSON.parse(data);
                const item = dataJson.find(item => item.id === id);
                if(item.length === 0){
                    return res.status(404).json({ erro: "Item não encontrado." });
                }
                return res.status(200).json(item);
            }
        })
    }
    catch(err){
        return res.status(500).json({ erro: "Erro ao carregar os itens." });
    }    
    
});

app.post("/api/itens", (req, res) => {
    const item = req.body;
    if (!item){
        return res.status(400).json({ erro: "Corpo de envio inválido!" });
    }

    try{
        fs.readFile(__dirItens, "utf8", (err, data) => {
            if (err){
                console.log(err);
                return res.status(500).json({ erro: "Erro ao ler o arquivo." });
            } 
            else{
                if(!item.nome || !item.pais || !item.titulos_principais){
                    return res.status(400).json({ erro: "Campos obrigatórios não preenchidos."});
                }
                const dataJson = JSON.parse(data);
                
                
            }
        });

    }
    catch(err){
        return res.status(500).json({ erro: "Erro ao carregar os itens." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});