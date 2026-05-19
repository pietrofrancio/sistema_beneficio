let resposta = document.getElementById('resposta')

let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    
    fetch('http://localhost:3000/beneficios')
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})