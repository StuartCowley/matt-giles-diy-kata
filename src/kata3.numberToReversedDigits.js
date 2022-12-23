const numberToReversedDigits = (number) => {
    console.log(number);
    number = number + "";
    console.log(number.length);
    number = number.split("").reverse();
    console.log(number);
    let array = [];
    for (i = 0; i < number.length; i++){
        array[i] = Number(number[i]);
    };
    console.log(array);
    return array;
};

module.exports = numberToReversedDigits;