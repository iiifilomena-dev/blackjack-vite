import _ from 'underscore'

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


export const crearDeckFijo = () => {

    let deck = [];

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
    console.log( deck );
    return deck;
}

/**
 * Está función crea un nuevo Deck.
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo Deck.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    // Valida Tipos de Carta
    if ( !tiposDeCarta || tiposDeCarta.lenght === 0 ) {
        throw new Error('El parámetro tiposEspeciales es obligatorio como un arreglo de string');
    }
    // Valida Tipos Especiales
    if ( !tiposEspeciales || tiposEspeciales.lenght === 0 ) {
        throw new Error('El parámetro tiposEspeciales es obligatorio como un arreglo de string');
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

export default crearDeck;