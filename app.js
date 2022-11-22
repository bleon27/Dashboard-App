//VARIABLES GLOBALES
const contenedorNintendo = document.querySelector('.nintendo');
let pokemonName = '';



//ESCUCHADORES DE EVENTOS
document.addEventListener('DOMContentLoaded', getRickAndMorty);


//FUNCIONES
async function getRickAndMorty() {
    let randomNumber = Math.ceil(Math.random() * 905);
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
    const resultado = await respuesta.json();
    console.log(resultado.results)
    /*
        contenedorNintendo.innerHTML = `
        <img width='200px' src = '${resultado.sprites.front_default}' />
        <input class='input' type='text' placeholder='¿Quien es este pokemon?' />
        <button type='button' onClick={checkPokemon()}>Probar</button>
        `
    */
    pokemonName = resultado.name;
}

function checkPokemon() {
    let inputPokemon = document.querySelector('.input').value;
    console.log(inputPokemon, pokemonName);
    if (inputPokemon === pokemonName) {
        getRickAndMorty();
    } else {
        document.querySelector('.input').value = ''
    }
}