let resposta = document.getElementById('resposta')

let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e)=>{
    e.preventDefault()

    let codBeneficio = document.getElementById('codBeneficio').value
    
    console.log(codBeneficio)
    
    fetch(`http://localhost:3000/beneficio/${codBeneficio}`,{
        method: 'DELETE',
        headers: { 'Content-Type':'application/json'},
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})