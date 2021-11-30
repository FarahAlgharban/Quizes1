/* 1- create an array "food" that has the following values: "burger", "kabsa", "spaghetti", "pizza"  and save it inside the session storage and 
give it the key name "food". */

// write your code here


const food = [ "burger", "kabsa", "spaghetti", "pizza" ];

sessionStorage.setItem('myFood',  JSON.stringify(food));
let array = sessionStorage.getItem('myFood');
array = JSON.parse(food);



/* 2- create an object of objects called "cars" that has the keys: mercedes, toyota, ford. each of these will have the following object as value:
        country: a string representing the country of origin of the car
        models: an array of strings containing three models of the car
    then, save this object inside a the local storage.
 */

// write your code here


const cars = {
    'mercedes': [
        { 'country': 'German', 'models': '2018'
        }
    ],

    'toyota': [
        { 'country': 'Japaness', 'models': '2020'
        }
    ],

    'ford': [
        { 'country': 'American','models': '2021'
        }
    ]
}

/* 3- create a function called getCar that takes string parameter "car" that will get the cars object from the database and print the following
using index 1 in the model array: "[car model] is made by [car] in [country]"  */

const getCar = function(car){
    this.ford;
    this.mercedes;
    this.toyota;

}
 getFord (){
    
    return this.ford;
}
 getMercedes (){
    return this.mercedes;
}

getToyota (){
    return this.toyota;
}

  const ford = new car(" ford in american");
  const mercedes = new car(" mercedes in Germany");
  const toyota = new car (" toyota in Japaness")
  console.log(ford.getFord());
  console.log(mercedes.getMercedes());
  console.log(toyota.getToyota());


/* ex: getCar(ford) -> "the mustang is made by ford in america "  
       getCar(mercedes) -> "the E200 is made by mercedes in Germany"
*/



/* 4- create a function called addFood that takes a string "meal", that will add the meal string to the food array saved inside the session storage and then print the array with the new value added */

const addFood = function (meal) {
    const meal = JSON.parse(sessionStorage.getItem("food"));
    meal.push(meal);
    sessionStorage.setItem("food", JSON.stringify(meal));
  }; 


/* ex: 
addFood("shawarma") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma"] 
addFood("fried chicken") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma", "fried chicken"]
*/






/* 5- create a class dog that has name , species, and age of the dog
define a method makeSound that prints the name of the dog with word "woof"
*/

class Dog{
 constructor(name, species,age) {
            this.name = name;
            this.species = species;
            this.age = age;
          };

    getDog () {
        return this.name
    }
    getspecies () {
        return this.species
    }

    getage () {
        return this.age
    }
    }
    /* ex:
    const dog1 = new Dog("Spike", "dobberman", 5)
    dog1.makeSound() -> "Spike says woof!"
     */
    const dog1 = new User("Spike","dobberman",5,);
    console.log(dog1.getDog(),dog1.getspecies(),dog1.getage());


    /*life cycle methods
6- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
*/
import React, { Component } from 'react'

export default class cycle extends Component {
    constructor(props){
        
    }
    componentDidMount() {  }
    componentWillUnmount() {  }
    render() {
        return (
            <div>
                 <h1>Hello world!</h1>
                
            </div>
        )
    }
}


// events
// 7- create a functional react component that has a state "insideInput" and an input and make it change the "insideInput" state only when you press enter   
// */
// /*

import React from 'react'

export default function insideInput () {
    return (
        <div>
            
        </div>
    )
}



// fetch/axios
// 8- write a code that will make a request to 'https://jsonplaceholder.typicode.com/todos/1' and console log the title and completed keys from the response
// */


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
