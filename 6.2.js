function easyNumber(num) {
    if (!Number.isInteger(num) || num < 2 && num > 1000) 
    return "Данные не верны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0)
        return "Не простое число";
        return "Простое число";
}

console.log(easyNumber(11));