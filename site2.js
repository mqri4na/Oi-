let titulo = document.querySelector('h1')
let lastParagraph = document.querySelector('.p')

titulo.addEventListener('mouseover', ()=> {
    lastParagraph.innerHTML = '<button>Mude o título</button>'
})
lastParagraph.addEventListener('click', ()=>{

titulo.innerText = 'Oi gatinho'

})

let a = prompt('Vamos jogar?')

if(a === 'sim' || a === 'Sim'){
    alert('Eu amo!')
}
else if(a === 'não' || a === 'Não'){
    alert('Resposta incorreta. Tente novamente!')
    location.reload()
}
else{
    alert('Resposta inválida. Tente novamente!')
    location.reload()
}