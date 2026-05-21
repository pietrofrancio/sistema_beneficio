let resposta = document.getElementById('resposta')

let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    
    fetch('http://localhost:3000/beneficios')
    .then(res => res.json())
    .then(dados => {
        // console.log(dados)
        resposta.innerHTML = ''
        resposta.innerHTML += ` 
            <table>
                ${criarThead()}
                ${criarTbody(dados)}
            </table>        
        `
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})

function criarTbody(dados){
    let corpo = ''
    corpo += `<tbody>`
    dados.forEach(el => {
        corpo += `<tr>`
        corpo +=`<td>${el.nome}</td>`
        corpo +=`<td>${el.cargo}</td>`
        corpo += `</tr>`
    })
    corpo += `</tbody>`
    return corpo
}

function criarThead(){
    let cabecalho = ''
    cabecalho += `
        <thead>
            <th>Nome</th>
            <th>Cargo</th>
    </thead>
    `
    return cabecalho
}

