//VARIABLES GLOBALES
const contenedorNintendo = document.querySelector('.nintendo');
let pokemonName = '';



//ESCUCHADORES DE EVENTOS
document.addEventListener('DOMContentLoaded', getRickAndMorty);


//FUNCIONES
async function getRickAndMorty() {
    let randomNumber = Math.ceil(Math.random() * 905);
    const respuestaRicks = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
    const resultadoRicks = await respuestaRicks.json();
    const respuestaMortys = await fetch(`https://rickandmortyapi.com/api/character/?name=morty`);
    const resultadoMortys = await respuestaMortys.json();
    var totalRicks = resultadoRicks.info.count;
    var totalMortys = resultadoMortys.info.count;
    var total = totalRicks+totalMortys;
    
    var porcentajeRicks = (totalRicks*100)/total;
    var porcentajeMortys = 100-porcentajeRicks;
    /*
        contenedorNintendo.innerHTML = `
        <img width='200px' src = '${resultado.sprites.front_default}' />
        <input class='input' type='text' placeholder='¿Quien es este pokemon?' />
        <button type='button' onClick={checkPokemon()}>Probar</button>
        `
    */
    //pokemonName = resultado.name;
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Ricks', 'Mortys'],
            datasets: [{
                label: '# of Votes',
                data: [porcentajeRicks, porcentajeMortys],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
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