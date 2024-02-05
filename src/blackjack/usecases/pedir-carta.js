
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Muestra las Cartas 
 * @returns {Array<String>} Devuelve el nuevo array de Deck
 */
export  const pedirCarta = (deck) => {
   

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
} 