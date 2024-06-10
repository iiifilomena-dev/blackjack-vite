/**
 * Está función pide una carta del deck.
 * @param {Array<String>} deck Ejemplo: [ "6H", "5C", "JC", "9H", "3C", "JH", "8C", "7S", "QH", "JS", … ]
 * @returns {Array<String>} Retorna la última carta del deck
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    if ( !deck ) {
        throw new Error('El parámetro deck es obligatorio');
    }
    const carta = deck.pop();
    return carta;
}