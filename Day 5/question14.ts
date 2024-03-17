let guests: string[] =["Haider", "Ali", "Danish"];

// Program using  For Loop

for (let i=0; i<guests.length; i++){
    console.log(`Dear ${guests[i]} ", \n As Eid approaches, I'm excited to
                 extend an invitation to you for a joyous celebration at my home!"`);
}

// Program using Arrow Funation

guests.forEach(guests =>{
    console.log(`Dear ${guests}", \n As Eid approaches, I'm excited to 
                extend an invitation to you for a joyous celebration at my home!"`);
})

