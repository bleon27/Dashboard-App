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

async function getLoadData() {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/`);
    const resultado = await respuesta.json();
    var tabla = document.getElementById('tableRickAbdMorty').querySelector('tbody');
    tabla.innerHTML = '';
    console.log(resultado.results)
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
        /*let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td9 = document.createElement('td');
        let td10 = document.createElement('td');

        td1.appendChild(val.id);
        td2.appendChild(val.name);
        td3.appendChild(val.status);
        td4.appendChild(val.species);
        td5.appendChild(val.type);
        td6.appendChild(val.gender);
        td7.appendChild(val.origin);
        td8.appendChild(val.location);
        td9.appendChild(val.image);
        td10.appendChild(val.episode);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        tabla.insertAdjacentElement("beforeend", tr);
        */
    });
    tabla.innerHTML = tr;


}

getLoadData()
