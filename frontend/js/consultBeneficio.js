let resposta = document.getElementById('resposta')

let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e)=>{
    e.preventDefault()

    let codBeneficio = document.getElementById('codBeneficio').value
    
    console.log(codBeneficio)
    
    fetch(`http://localhost:3000/beneficio/${codBeneficio}`)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})