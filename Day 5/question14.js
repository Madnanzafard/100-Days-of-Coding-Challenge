var guests = ["Haider", "Ali", "Danish"];
// Program using  For Loop
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], " \", \n As Eid approaches, I'm excited to\n                 extend an invitation to you for a joyous celebration at my home!\""));
}
// Program using Arrow Funation
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, "\", \n As Eid approaches, I'm excited to \n                extend an invitation to you for a joyous celebration at my home!\""));
});
