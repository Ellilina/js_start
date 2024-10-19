const a = prompt('введите число')
const b = prompt("Введите второе число")

// function isPositive(number) {
//     alert(`Вход ${number}, тип ${typeof number}`)

    // if ((typeof number !== 'numer') || (!number && number !== 0)) {
//     return "Введено некорректное число"
//     }

    // if (number > 0) {
    //     return "ПОложительное"
    // } else if (number < 0) {
    //     return "Отрицательное"
    // } else if (number === 0) {
    //     return "Ноль"
    // } else {
    //     return "Введено некорректное число"
    // }

// // function isValidAge(age) {
//     if(age <= 120 && age >= 0) {
//         return "Возраст корректный"
//     }
//     return "Возраст не орректный"
// }


// function isModule(num1) {
//     let absoluteValue = Math.abs(num1)
//     console.log(`модуль числа |${num1}| = ${absoluteValue}`)
// }

// function isBigNumber(num1, num2) {
// if (num1 > num2) {
//     console.log('Большое число ' + num1)
// } else if (num2 > num1) {
//     console.log('Большое число ' + num2)
// } else {
//     console.log('Числа равны')
// }
// }

// function isKratno5(number) {
//     // return number % 5 ? "Не кратно" : "Кратно"
//     if (number % 5 !== 0) {
//         return "Не кратно"
//     } else if (number % 5 === 0) {
//         return "Кратно"
//     }
// }

// function isEarth(planet) {
//     planet = planet.toLowerCase()

//     return `Привет, ${planet === 'земля' ? 'землянин' : 'иноплонетянин'}!`
// }

// function getSmallerNumber(num1, num2) {
//     return num1 < num2 ? num1 : num2;
// }
// const smaller = getSmallerNumber(num1, num2)

// function power(base, exponent) {
//     return base ** exponent;
// }

// const result = power(number, degree);
// console.log(`${number} в степени ${degree} равно ${result}`);

// function calculate(num1, num2, operator)
// switch(operator) {
//     case '+' :
//         return num1 + num2
//     case '-' :
//       return  num1 - num2
//     case '*' :
//       return  num1 * num2
//     case "/" :
//        return num1 / num2 

//     default:
//         return "Будьте внимательнее!"
// }

function mod(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно");
    }
    return a - Math.floor(a / b) * b;
}


console.log(mod(a, b))