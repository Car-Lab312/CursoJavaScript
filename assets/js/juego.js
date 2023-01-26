/**
 * 2C = Two of Clubs Clubs
 * 2D = Two of Clubs Diaminds
 * 2H = Two of Clubs Hearts
 * 2S = Two of Clubs Spades
 */


let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosIA = 0;
    

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const PuntosJ = document.querySelectorAll('small');
const PuntosI = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasIA = document.querySelector('#cartas-IA');

//esta funcion crear una nueva varaja
const crearDeck = () =>{

    for( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos ){
            deck.push( i + tipo );
        }
    }
    
    for( let tipo of tipos ){
        for( let esp of especiales){
            deck.push( esp + tipo );
        }

    }

    // console.log( deck );
    deck=_.shuffle(deck);
    // console.log( deck );
}

crearDeck();

//Esta función me permite tomar una carta
const pedirCarta = () => {

    if ( deck-length === 0 ){
        throw 'No hay mas cartas en el deck'
    }

    const carta = deck.pop();
    return carta;

}

// for(let i = 0; i <= 100; i++){
//     pedirCarta();
// }
// pedirCarta();
const valorcarta = ( carta ) =>{

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            (valor === 'A' ) ? 11 : 10
            : valor * 1; 
    
}

//Turno de la IA
const TurnoIA = ( puntosminimos ) => {

    // do{

        const carta = pedirCarta();
        
        puntosIA = puntosIA + valorcarta( carta );
        PuntosI[1].innerText = puntosIA;
        
        // <img class="cartas" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('cartas');
        divCartasIA.append( imgCarta );
    // }while

}

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorcarta( carta );
    PuntosJ[0].innerText = puntosJugador;

    // <img class="cartas" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('cartas');
    divCartasJugador.append( imgCarta );

    if( puntosJugador > 21){
        console.warn('Juego terminado, Perdio')
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }



});

// TODO: Borrar
TurnoIA(12);


// valorcarta('JD');
    // const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // // 2 = 2 10 = 10, 3 = 3 
    // if( isNaN( valor ) ){

    //     puntos = ( valor === 'A' ) ? 11 : 10;

    // } else{
    //     console.log('Es un numero');
    //     puntos = valor * 1;
    // }

    // console.log(puntos);

