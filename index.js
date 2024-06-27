function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); 
}
function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; 
}
function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    return distance;
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

