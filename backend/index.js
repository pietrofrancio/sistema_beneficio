const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost' // ip: 127.0.0.1

const conn = require('./db/conn')
const controllerBeneficio = require('./controller/beneficio.controller')

// ---- middleware -------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -----------------------

app.post('/beneficio', controllerBeneficio.cadastrar)
app.get('/beneficios', controllerBeneficio.listar)
app.get('/beneficio/:id', controllerBeneficio.consultar)
app.delete('/beneficio/:id', controllerBeneficio.apagar)


app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação Rodando!'})
})

// ---------- server -----
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados!',err)
})
