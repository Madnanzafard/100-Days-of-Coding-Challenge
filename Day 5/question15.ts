let guest: string[] =["Haider", "Ali", "Danish"];

let unableToAttend= "Haider";
console.log(`${unableToAttend} can't come for Eid Celebration`);

let newGuest = "Sajid";
guest[guest.indexOf(unableToAttend)]= newGuest;
guest.forEach(guest =>{
    console.log(`Dear ${guest}", \n As Eid approaches, I'm excited to 
                extend an invitation to you for a joyous celebration at my home!"`);
});


