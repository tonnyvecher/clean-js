function isPalindrome(str) {
  let original = str
    .replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "")
    .toLowerCase();

  let reverse = original.split("").reverse().join("");

  if (original == reverse) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// console.log(isPalindrome("А роза упала на лапу Азора"));
// console.log(fizzBuzz());

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
