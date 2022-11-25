import { charjs } from "./chart.js";
//VARIABLES GLOBALES
const contenedorNintendo = document.querySelector('.nintendo');
let pokemonName = '';



//ESCUCHADORES DE EVENTOS
document.addEventListener('DOMContentLoaded', getRickAndMorty);


//FUNCIONES
async function getRickAndMorty() {
    const respuestaRicks = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
    const resultadoRicks = await respuestaRicks.json();
    const respuestaMortys = await fetch(`https://rickandmortyapi.com/api/character/?name=morty`);
    const resultadoMortys = await respuestaMortys.json();

    const respuestaRicksAlive = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=alive`);
    const resultadoRicksAlive = await respuestaRicksAlive.json();
    const respuestaRicksDead = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=dead`);
    const resultadoRicksDead = await respuestaRicksDead.json();
    const respuestaRicksUnknown = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=unknown`);
    const resultadoRicksUnknown = await respuestaRicksUnknown.json();

    const respuestaMortysAlive = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=alive`);
    const resultadoMortysAlive = await respuestaMortysAlive.json();
    const respuestaMortysDead = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=dead`);
    const resultadoMortysDead = await respuestaMortysDead.json();
    const respuestaMortysUnknown = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=unknown`);
    const resultadoMortysUnknown = await respuestaMortysUnknown.json();

    var totalRicks = resultadoRicks.info.count;
    var totalMortys = resultadoMortys.info.count;
    var total = totalRicks + totalMortys;

    var porcentajeRicks = ((totalRicks * 100) / total).toFixed(2);
    var porcentajeMortys = (100 - porcentajeRicks).toFixed(2);

    document.getElementById("totalRycksMortys").innerHTML = total;
    document.getElementById("totalRicks").innerHTML = porcentajeRicks;
    document.getElementById("totalMortys").innerHTML = porcentajeMortys;
    
    const data = {
        rick: { total: totalRicks, alive: resultadoRicksAlive, dead: resultadoRicksDead, unknown: resultadoRicksUnknown, porcentajeRicks: porcentajeRicks },
        morty: { total: totalMortys, alive: resultadoMortysAlive, dead: resultadoMortysDead, unknown: resultadoMortysUnknown, porcentajeMortys: porcentajeMortys }
    }
    charjs(data)

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