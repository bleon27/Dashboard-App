import { charjs } from "./chart.js";
//VARIABLES GLOBALES
const contenedorNintendo = document.querySelector('.nintendo');
let pokemonName = '';

document.addEventListener('DOMContentLoaded', getRickAndMorty);

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
var paginaActual = 1;
var totalPaginas = 0;
async function getLoadData() {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}${busqueda}`);
    const resultado = await respuesta.json();
    var tabla = document.getElementById('tableRickAbdMorty').querySelector('tbody');
    var tr = '';
    resultado.results.forEach(function callback(val, index) {
        tr += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.status}</td>
                <td>${val.species}</td>
                <td>${val.type}</td>
                <td>${val.gender}</td>
                <td>${val.origin.name}</td>
                <td>${val.location.name}</td>
                <td><img src="${val.image}" class="image"></td>
            </tr>
        `
    });
    document.getElementById("ultima-pagina").innerHTML = resultado.info.pages;
    totalPaginas = resultado.info.pages;
    tabla.innerHTML = tr;
}

getLoadData()


var busqueda = '';

document.querySelector("#columBusqueda").addEventListener("change", buscar);

document.getElementById("buscarNombre").addEventListener("keyup", buscar)
function buscar() {
    var buscarNombre = document.getElementById("buscarNombre").value.toLowerCase();
    var $SelectColumBusqueda = document.querySelector("#columBusqueda");
    var selectedOption = $SelectColumBusqueda.options[$SelectColumBusqueda.selectedIndex].value;
    var estado = '';
    var name = '';

    if (buscarNombre != '') {
        name = `&name=${buscarNombre}`;
    }
    if (selectedOption.value != 'Todos') {
        estado = `&status=${selectedOption}`;
    }
    paginaActual = 1;
    busqueda = `${name}${estado}`;
    getLoadData()
}

document.getElementById("anterior").addEventListener("click", function () {
    if (paginaActual > 1) {
        paginaActual--;
        document.getElementById("pagina-actual").innerHTML = paginaActual;
        getLoadData()
    }
})

document.getElementById("siguiente").addEventListener("click", function () {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        document.getElementById("pagina-actual").innerHTML = paginaActual;
        getLoadData()
    }
})
