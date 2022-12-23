const reachDestination = (distance, speed) => {
    const arrival = Math.round(distance / speed * 2) / 2;
    console.log(arrival);
    const string = `I should be there in ${arrival} hours.`;
    return string;
};

module.exports = reachDestination;
