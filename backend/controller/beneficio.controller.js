const Beneficio = require('../models/Beneficio')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    let beneficioColab = 0.0
    if(valores.categoria === 'estagio'){
        beneficioColab = (valores.horas * 12.50) + valores.salario * 0.07
    }else if(valores.categoria === 'pleno'){
        beneficioColab = (valores.horas * 20) + valores.salario * 0.11
        
    }else if(valores.categoria === 'senior'){
        beneficioColab = (valores.horas * 27) + valores.salario * 0.17
    }

    const valores2 = {
        nome: valores.nome,
        cargo: valores.cargo,
        salario: valores.salario,
        horas: valores.horas,
        categoria: valores.categoria,
        beneficioColab: beneficioColab
    }
    console.log(valores2)
    try{
        await Beneficio.create(valores2)
        res.status(200).json({message: 'Dados cadastrados com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Erro ao cadastrar no banco de dados!'})
        console.error('Erro ao cadastrar no banco de dados!',err)
    }

}
const listar = async (req,res)=>{
    try{
        const dados = await Beneficio.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: 'Erro ao listar os dados!'})
        console.error('Erro ao listar os dados!',err)
    }
}
const consultar = async (req,res)=>{
    const valor = req.params.id
    console.log(valor)

    try{
        const dados = await Beneficio.findOne({where: {codBeneficio: valor}})
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: 'Erro ao consultar os dados!'})
        console.error('Erro ao consultar os dados!',err)
    }

}
const apagar = async (req,res)=>{
    const valor = req.params.id
    console.log(valor)

    try{
        await Beneficio.destroy({where: {codBeneficio: valor}})
        res.status(200).json({message: 'Dados excluídos com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Erro ao excluir os dados!'})
        console.error('rro ao excluir os dados!',err)
    }
}

module.exports = { cadastrar, listar, consultar, apagar }