const fizzBuzz = (number) => {
    const isDivBy3 = (number % 3) === 0;
    const isDivBy5 = (number % 5) === 0;
    if (isDivBy3 && isDivBy5) {
      return `FizzBuzz`;
    }
    else if (isDivBy3) {
      return `Fizz`;
    }
    else if (isDivBy5) {
      return `Buzz`;
    }
    else {
      return number;
    }
  };
module.exports = fizzBuzz;
