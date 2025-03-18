function validateInput(userInput) {
    if (userInput === null || userInput.trim() === "") {
        return "Помилка: порожнє значення";
    }
    if (!/^\d+$/.test(userInput.trim())) {
        return "Помилка: введене значення має містити лише цифри без пробілів, літер і десяткових знаків";
    }
    return "Коректне значення";
}


const testValues = [null, '   ', ' 12dsdf ', ' 12.12 ', '123'];
testValues














function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function validateAndCheckPrime(userInput) {
    if (userInput === null || userInput.trim() === "") {
        return "Помилка: порожнє значення";
    }

    let num = parseInt(userInput.trim(), 10);
    if (isNaN(num)) {
        return "Помилка: введене значення має бути цілим числом";
    }

    return isPrime(num) ? "Число є простим" : "Число не є простим";
}

const testValues = [' -10   ', '   0  ', '   1   ', '   27   ', ' 13 '];
testValues.forEach(value => {
    console.log(`'${value}': ${validateAndCheckPrime(value)}`);
});
