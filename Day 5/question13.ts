let guests: string[] =["Suzuki Inazuma Bike", "Hummer Car", "Landi Jeeb"];

// Program using  For Loop

for (let i=0; i<guests.length; i++){
    console.log(`I would like to own a ${guests[i]}.`);
}

// Program using Arrow Funation

guests.forEach(favouriteTransportation =>{
    console.log(`I would like to own a ${favouriteTransportation}.`);
})