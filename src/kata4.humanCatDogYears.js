const humanCatDogYears = (number) => {
    let cat = number*4;
    let dog = number*5;
    if (number > 1){cat = cat+16}
    else if (number >= 1){cat = cat+11};
    if (number > 1){dog = dog+14}
    else if (number >= 1){dog = dog+10};
    let humanCatDogNum = [number, cat, dog];
    console.log(humanCatDogNum);
    return humanCatDogNum;
};

module.exports = humanCatDogYears;
