let resposta = document.getElementById('resposta')

let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    let nome = document.getElementById('nome').value
    let cargo = document.getElementById('cargo').value
    let salario = Number(document.getElementById('salario').value)
    let horas = Number(document.getElementById('horas').value)
    let categoria = document.getElementById('categoria').value

    const valores = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        horas: horas,
        categoria: categoria
    }
    console.log(valores)
    
    fetch('http://localhost:3000/beneficio',{
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})