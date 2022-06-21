const tela = document.querySelector('.tela')
const telaImg = document.querySelector('.tela img')
const botaoStart = document.querySelector('.botao-preto')


function showPokemon(){
let randomIndex = Math.floor(Math.random()* 100) 

fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
.then(r => r.json())
.then(json => {
 
telaImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex}.png`

})

}


botaoStart.addEventListener('click', showPokemon)