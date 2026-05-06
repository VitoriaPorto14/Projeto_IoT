//Requisitando as bibliotecas necessárias para o projeto
const express = require('express');
const cors = require('cors');
const app = express();

//Informando as dependências utilizadas
app.use(cors());
app.use(express.json());

//Criando um banco de dados local
let historicoSensores = [
    {id:1,temperatura:25,umidade:50,hora:"10:00"},
    {id:2,temperatura:40,umidade:60,hora:"11:00"},
    {id:3,temperatura:35,umidade:55,hora:"12:00"},
];

app.get('/api/dados', (req,res) => {
    res.json(historicoSensores);
});

app.post('/api/dados' , (req,res) =>{
    const{temperatura,umidade,hora} = req.body;

    if(!temperatura || !umidade || !hora){
        return res.status(400).json({mensgaem:"Dados incompletos! Verifique novamente!"});
    }

    const novosDados = {
        id: historicoSensores.length + 1,
        temperatura,
        umidade,
        hora
    }
    historicoSensores.push(novosDados);
    res.status(201).json({mensgaem:"Dados enviados com sucesso!",dados:novosDados
    });
});

const PORT = process.env.use || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
    console.log("")
})


