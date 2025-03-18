function removeCharacters(str, charsToRemove) {
    if (typeof str !== 'string' || !Array.isArray(charsToRemove)) {
        return "Помилка: Неправильний формат вхідних даних";
    }

    let regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return str.replace(regex, '');
}


const userInput = " hello world";
const charsToRemove = ['l', 'd'];

console.log(removeCharacters(userInput, charsToRemove)); 







