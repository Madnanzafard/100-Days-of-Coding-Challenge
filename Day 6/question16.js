var guests = ["hadier", "ali", "danish"];
console.log("Good news! we got bigger venue for party");
//console.log(guests);
guests.push("sajid", "muneer");
//console.log(guests);
guests.unshift("awais");
//console.log(guests);
guests.splice(guests.length / 2, 0, "adnan");
//console.log(guests);
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would you like to join in Eid Party"));
});
