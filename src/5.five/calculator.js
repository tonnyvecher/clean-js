class Calculator {
  constructor() {
    console.log("Калькулятор джаваскриптера");
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return "Ошибка, т.к. деление на ноль невозможно (возможно, но это уже выш мат хахах)";
    }
    return a / b;
  }
}

const calc = new Calculator();

console.log("Сложение: 5 + 3 =", calc.add(5, 3));
console.log("Вычитание: 10 - 7 =", calc.subtract(10, 7));
console.log("Умножение: 4 * 6 =", calc.multiply(4, 6));
console.log("Деление: 20 / 4 =", calc.divide(20, 4));
console.log("Деление на ноль: 10 / 0 =", calc.divide(10, 0));
