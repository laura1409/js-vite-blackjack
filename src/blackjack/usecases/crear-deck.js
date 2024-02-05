import _ from 'underscore';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<string>} tipos Ejemplo: ['C','D','H','S'];
 * @param {Array<string>} especiales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo Deck de cartas
 */


export const crearDeck = (tipos,especiales) => {

    if( !tipos || tipos.length === 0 ) throw new Error
        ( ' tipo de carta es  obligatorio como un arreglo de string' );
        
    if( !especiales || especiales.length === 0 ) throw new Error
         ( ' tipo de cartaespeciales es  obligatorio como un arreglo de string' );

    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
