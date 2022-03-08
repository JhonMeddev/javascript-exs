/*Goals: 1. Finds all the prime numbers between 1 and 1000. 2. Sums all the prime numbers that you found between 1 and 1000. 3. The `main` function should return the sum of all prime numbers.

A prime number is a natural number greater than 1 that is only divisible by 1 and itself. 2, 3, 5, 7, 11, 13 etc are prime numbers.
4 for example, is not a prime number since 4 is divisible by 2. 4 / 2 = 2.
Bonus points for a more functional approach in your code. For example, try to use array functions such as map, filter or reduce.

*/

// Função principal
function main() {
    // Verifica os números primos até 1000
    primeNumbers(1000);
    
    //soma
    var soma = 0;
    for (var i = 0; i < numbers.length; i++) {
        soma += numbers[i];
    }
    
    console.log("Os numero primos são: "+numbers)
    console.log("E a soma deles é: " + soma)
}

// Adiciona os números primos em um array
function primeNumbers(num) {
     numbers = [];
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}

// Verifica se o número é primo
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        };
    return num > 1;
}


