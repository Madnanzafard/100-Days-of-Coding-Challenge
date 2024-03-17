var guests = ["Suzuki Inazuma Bike", "Hummer Car", "Landi Jeeb"];
// Program using  For Loop
for (var i = 0; i < guests.length; i++) {
    console.log("I would like to own a ".concat(guests[i], "."));
}
// Program using Arrow Funation
guests.forEach(function (favouriteTransportation) {
    console.log("I would like to own a ".concat(favouriteTransportation, "."));
});
