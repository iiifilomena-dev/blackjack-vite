/**
 * Esta función obtiene el valor de la carta
 * @param {string} carta Ejemplo: 8D
 * @returns {number} Retorna el valor de la carpeta, para el ejemplo de 8D devuelve 8
 */

export const valorCarta = ( carta ) => {

    if (!carta) {
        throw new Error('El parámetro carta es obligatorio');
    }

    if (carta.length <= 1 || carta.length > 3) {
        throw new Error('La carta se compone con al menos dos caracteres y máximo 3 caracteres. Ejemplo 2D o 10S')
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}