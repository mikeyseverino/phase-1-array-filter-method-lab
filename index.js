function findMatching(driverArray, names){
    return driverArray.filter(
        (driverMatch) => driverMatch.toLowerCase() === names.toLowerCase()
    );
}
function fuzzyMatch(driverArray, names){
    return driverArray.filter(
        (letterMatch) => letterMatch.charAt(0) === names.charAt(0)
    );
}
function matchName(driverArray, hometown){
    return driverArray.filter((record) => record.name === hometown);
}