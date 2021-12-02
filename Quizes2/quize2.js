//Declare an array with your name. 
//This array will save the position of each letter //
//(in English language i.e. 1-26) of your name. E.g. 
//name ASD has 3 letters and have position: 1, 19, 4
// (the number of elements in array is same as letters of your name). 
//Get sum of values in the array above using any of the loops you like, 
//and find the remainder of the sum when it is divided by 4.


const farah = [6, 1, 18, 1, 8]
let sum = 0;
for ( i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum % 4);



// Based on your remainder in the above question, Choose one of the following APIs.

// 1. FishWatch API
// https://www.fishwatch.gov/api/species

// 2. Catfacts API
// https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=25

// 3. PokeAPI:
// https://pokeapi.co/api/v2/pokemon?limit=25&offset=377

// 4. balldontlie API: 
// https://www.balldontlie.io/api/v1/teams


//Fetch the data and display it in console, using fetch or axios call.

fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=377")
    .then((res) => res.json())
    .then((data) => {
      console.log(`Name is: ${data.name}`);
    })
    .catch((err) => console.log(err));




