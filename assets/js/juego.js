/**
 * 2C = Two of Clubs Clubs
 * 2D = Two of Clubs Diaminds
 * 2H = Two of Clubs Hearts
 * 2S = Two of Clubs Spades
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

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

    console.log( deck );

}

crearDeck();