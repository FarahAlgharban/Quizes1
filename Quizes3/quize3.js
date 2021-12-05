/*===================================== Quiz 3 ============================================ */

/* 1-create a function longestWord that returns the longest word in a sentence */

const longestWord = function(str){
        let strSplit = str.split(' ');
        let longestWord = 0;
        for( i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > longestWord){
          longestWord = strSplit[i].length;
           }
        }
        return longestWord;
      }
      longestWord('dogs and cats are cute'); // => "dogs"


/* 
Examples:
longestWord('time dog cat'); // => 'time'
longestWord('we love cats'); // => 'love'
longestWord('dogs and cats are cute'); => "dogs"
longestWord(''); // => 'it's empty string'
*/


/* 2- create a function SumOddNumber that returns the sum of all od numbers inside an array of numbers */
    let arr = [1, 2, 3, 4, 5];
    const sumOddNumber = function(arr) {
      let sum = 0;
      for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 1){ 
        sum = sum + arr[i];
        }
      }
     
      return sum;
    }
     
    console.log(sumOddNumber(arr));

/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
SumOddNumber([2, 4, 6,0 ]) // => 0
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([-2, 0, 4, -3, 5]) // => 2
SumOddNumber([]) // => 0


*/


/* 3- create a function isPowerOfTwo that returns YES if a number is power of 2, and NO if not */
    function isPowerOfTwo(n)
    {
        if (n == 0)
            return false;
 
        return parseInt( (Math.ceil((Math.log(n) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(n) / Math.log(2))))));
    }
     
    if (isPowerOfTwo(0))
        console.log("NO");
        else (isPowerOfTwo(1))
        console.log("YES");


/*
Example:
isPowerOfTwo(0) // => 'NO'
isPowerOfTwo(1) // => 'YES'
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
*/


/* 4- Create a function  flattenArray that takes an array of strings, numbers, and arrays. Then returns an array without an arrays inside it  */
// P.S: DO NOT USE .flat() or .flatMap() methods


let arr = new Array('0', '1', '2')
const flattenArray = function(arr){

arr = arr.concat('3', '4')
}


/*
Examples:
flattenArray([0, 1, 2, [3, 4]]) 
// => [0,1,2,3,4]

flattenArray(["john", 45, "nameless", [7, "sarah"], ["another", "grid", 78]]) 
// => ["john", 45, "nameless", 7, "sarah", "another", "grid", 78]

flattenArray([["this"], "is",["fine"], 88, {name:"mike", height: 180}, [3, 4]]) 
// => ["this", "is", "fine", 88, {name: "mike", height: 180}, 3, 4]
*/



/* 5- Create a function removeNotUnique that takes a string, delete any characters that are not unique from the string. */

const removeNotUnique = function(str){
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }



/* 
Examples:
removeNotUnique('memory') // => 'eory'
removeNotUnique('hello lol') // => 'he '
removeNotUnique('xyzj') // => 'xyzj'
removeNotUnique('iiii') // => ''
removeNotUnique('') // => 'it's empty'
*/

/* 6- Create a function containsElements that takes two arrays of numbers and returns true if the second array contains elements of the numbers of the first array numbers */

const containsElements = function(arr1, arr2){
/*         write your code here        */
}

/* 
Examples:
containsElements([12, 14, 35], [5, 4, 3, 2, 7]) // => true
containsElements([52, 21, 7, 77], [26, 7, 3]) // => false
*/