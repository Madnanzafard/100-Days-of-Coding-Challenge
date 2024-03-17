var guest = ["Haider", "Ali", "Danish"];
var unableToAttend = "Haider";
console.log("".concat(unableToAttend, " can't come for Eid Celebration"));
var newGuest = "Sajid";
guest[guest.indexOf(unableToAttend)] = newGuest;
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, "\", \n As Eid approaches, I'm excited to \n                extend an invitation to you for a joyous celebration at my home!\""));
});
