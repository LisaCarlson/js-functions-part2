
// function oldestPerson(object) {
//   var greatest = 0;
//   var oldest = '';

//   for (var name in object ) {
//     var age = object[name];
//     if ( age > greatest ) {
//       greatest = age; 
//       oldest = name;
//     }
//   }
//   return(oldest);
// };

// oldestPerson({Chuck: 22, Larry: 48, Tom: 9, Jasper: 107});

//2.

// function longestWord(str) {
//   var re = /[^\w\s]/g;
//   var res = str.replace(re, "");

//   var words = res.split(' ');

//   var check = 0;
//   var result = '';
//   for (var x in words) {
//     var word = words[x];
//     if (word.length > check) {
//       result = word;
//       check = word.length;
//     }

//   }
//   // console.log(result);
// }

// longestWord('Now! velociraptor.');


//3.

// function longestWord(str) {
//   var words = str.split(' ');
//   var check = 0;
//   var result = '';
//   for (x in words) {
//     var word = words[x];
//     if (word.length > check) {
//       result = word;
//       check = word.length;
//     }

//   }
//   console.log(result);
// }

// longestWord('Now velociraptor');

//4. 

// function factorial(number) {
//   var result = 1;
//   for ( i=number; i>0; i--) {
//     result *= i;
//   }
//   return result;
// };


// console.log(factorial(6));

//5.

// function palindrome(string) {
//   var reverseString = '';

//   for ( i=string.length-1; i >= 0; i--  ) {
//     reverseString += string[i];
//   }

//   if (reverseString.toUpperCase() == string.toUpperCase()) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(palindrome('Racecar'));


// CALCULATE AGE

// function calculateAge(birthYear) {
//   var date = new Date();
//   var year = date.getFullYear();
//   var age = year - birthYear;
//   console.log(age);
// }

// calculateAge(1985);

// PERFECT SQUARE PRINTER

// function perfectSquarePrinter(n) {
//   output = [];
//   for ( i=1; i<=n; i++) {
//     if ( Math.sqrt(i) === Math.trunc(Math.sqrt(i))) {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(perfectSquarePrinter(64));

// function maxOfThreeNumbers(number1, number2, number3) {
//   console.log(Math.max(number1, number2, number3));
// }

// maxOfThreeNumbers(3, 200, 50);

//VOWEL CHECKER

// function vowelChecker(str) {
//   if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u') {
//     return true;
//   }

//   else {
//     return false;
//   }
// };

// console.log(vowelChecker('f'));

//GUESSING GAME

// var max = 10;
// var min = 1;

// var random = Math.floor(Math.random()*(max-min+1)) + min;

// while (guess != random) {
//   var guess = prompt('Want to play a game?', 'Guess a number between 1 and 10');
// if (guess < random) {
//   alert('Your guess is too low.');
// }

// else if (guess > random) {
//   alert('Your guess is too high.');
// }

// else {
//   alert('You guessed the number ' + guess + '!');
// }
// }
// console.log(random);


// function sub(str, x, y) {
 
//   for (var i = 0; i < str.length; ++i) {
//     var result = '';
//     // console.log(str.substring(i));

//     if (str.substring(i) == 'x') {
//      var str = str.substring(i).replace('x', 'y');
     
//       break;
//       console.log(str);
//     }
    
//   }
//   return result;
// }


// console.log(sub('aaBBaaBaBaAbAb', 'a', 'b'));

// sub('aaBBaaBaBaAbAb', 'a', 'b');

// function first(array, n) {
  
// var output = [];
//     for (i=1; i <= array.length; i++) {
//     if ( array.length < n) {
//       output.push(i);
//     }
//     if (i >= n) {
//     output.push(i); 
//     } 
   
//   }
//   return output;
// }

// console.log(first([1,2,3,4,5],3));

// REVERSE STRING
// return str.split('').reverse().join('')

// function reverseString(string) {
//   var result = '';

//   for ( var i=string.length-1; i >= 0; i-- ) {
//     result += string[i];
//   }
//   return result;
// }



// console.log(reverseString('stringey'));

//REVERSE ARRAY

// function reverseArray(array) {
//   var result = [];
//   for ( var i=array.length-1; i >= 0; i-- ){
//       result.push(array[i]);
//     }
//   return result;
// }

// console.log(reverseArray([1,2,3,4]));

//FLEXSTRING

// function flexString() {
//   var strings = arguments;
//   var output = [];
//     for ( var i = 0; i < strings.length; i++) {
//       output.push(strings[i]);
//     }
//       if (strings.length % 2 === 0) {
//         return output.join(',');
//       }
//       else {
//         return output.join('|');
//       }

// }


// console.log(flexString('some', 'strings', 'are', 'cool'));


// function union(array1, array2) {
//   var newArray = array1.concat(array2).sort();

//   return newArray;
// }



// console.log(union([1,2,3,'a'], [6,7,8,'a',1]));

// function join(arr, token1, token2) {
 
//   var output = '';
    
//   for(var i = 0; i < arr.length; i++) {
    
//     if ( i % 2 === 0 && i !== arr.length-1 ) {
//       output += arr[i] + token1;
//     }
//     else if (i !== arr.length-1) {
//       output += arr[i] + token2;
//     }
//     else {
//       output += arr[i];
//     }
   
//   }

//   return output;
// }


// console.log(join([1,2,3,4,5], '*' , '+'));

// function zip(arr1, arr2){
//     output =[];
//     for (var i = 0;i<=arguments.length; i++){
//         output.push(arr1[i], arr2[i]);
        
//     }
//     return output;
// }


// console.log(zip([1,2,3], [4,5,6,]));



//072915 SCOPE EXERCISES


// function convoluted(string) { var output = '';
//  function gibberish() {
//   for(var i = 0; i < string.length; i++) {
    
   
//       output += ('-' + string.charAt(i)); 

//       output += ('|' + string.charAt(i)); 
//       return output; 
//     }
  
//   }
//   return gibberish();
// }
// console.log(convoluted('Hello'));






// b = 10; 
// console.log(b); 
// b = 11; 
// console.log(b);

// var someValue = (function() { 
//   b = 12; return b; 
// })(); 

// console.log(someValue);

// 10
// 11
// 12


//GLOBAL SCOPE
//var name = 'Lisa';


/* LOCAL SCOPE

arg in function cool(arg) {}

*/

/* LEXICAL SCOPE
function within a function; inner function has access to the scope in the outer function; Closue;

function outer() {
  var outside = "out";
  
  function inner() {
    var inside = "in";
    //access to outside ok
  }
  // no access to inner
}
*/

 // CLOSURE 

// function goBananas() {
//   var a = 'One banana, ';
//     function inner() {
//       var b = 'Two banana, ';
//         function innerMiddle() {
//           var c = 'Three banana, ';
//             function innerMost() {
//               var d = 'Four!';
//               return a + b + c + d;
//             }
//           return innerMost();
//         }
//        return innerMiddle(); 
//     }
//   return inner();
// }

// console.log(goBananas());


// function intersection(arr1, token1, token2) {
//   var output = '';
//   for (var i=0; i < arr1.length; i++) {
//     console.log("HI1");
//      if ( i = arr1.length-1) {
//       console.log("HI2");
//       output += arr1[i];
//       console.log(output);
//     }
//     if ( i % 2 === 0 ) {
//       console.log("HI3");
//      output += arr1[i] + token1;
//      console.log(output);
//     }
//     else  {
//       console.log("HI4");
//       output += arr1[i] + token2; 
//       console.log(output);
//     }
   
//   }

//   return output;
// }


// console.log(intersection([1,2,3,4,5], '*', '+'));


// function person(obj) {
//    return Object.keys(obj).sort().reverse();
// }


// console.log(person({the: true, best: [1,2,3], object: false}));

// var laptop = {
//   color: 'silver',
//   width: '15 inches',
//   on: true,
//   asleep: false,
//   numberOfDaysSinceLastRestart: null,
//   turnOff: function() {
//     this.on = false;
//     this.asleep = false;
//     numberOfDaysSinceLastRestart = 0;,
//   },
//   turnOn: function() {
//     this.on = true;
//     this.asleep = false;
//     numberOfDaysSinceLastRestart = 1;
//   }

// };



// function mystery(input) {
//   var secret = 4;
//   input += 2;
//   function mystery2(multiplier) {
//     console.log(multiplier);
//     multiplier *= input;
//     return secret * multiplier;
//   }
//   return mystery2;
// }

// function mystery3(param) {
//   function mystery4(bonus) {
//     return param(6) + bonus;
//   }
//   return mystery4;
// }

// var hidden = mystery(3);
// var jumble = mystery3(hidden);
// var result = jumble(2);


// console.log(result);

//Using constructor:
// function House(color, windows) {
//      this.color = color;
//      this.windows = windows;
//      this.paintHouse = function(newColor) {
//         this.color = newColor;          
//      }
// }

// var vampHouse = new House('green', false);
// vampHouse.paintHouse('blurple');

// var wereHouse = new House('grey', true);
// wereHouse.paintHouse('black');

// console.log(wereHouse);

//Using apply:
// function House(color, windows) {
//      this.color = color;
//      this.windows = windows;         
     
// }

// var paintHouse = function(newColor, newWindows) {
//   this.color = newColor;
//   this.newWindows = newWindows;
// }

// var vampHouse = new House('green', false);
// paintHouse.apply(vampHouse, ["blurple", 5]);
// console.log(vampHouse);

// var wereHouse = new House('grey', true);
// paintHouse.apply(wereHouse, ["black", 10]);
// console.log(wereHouse);


// function diceRoller() {
//   return Math.ceil(Math.random() * 6);
// }

// console.log(diceRoller());

// function diceRoller(numDice) {
//   var output = [];
//     for (var i =0; i < numDice; i++){
//      output.push(Math.ceil(Math.random() * 6));
//   }
//   return output;
// }

// console.log(diceRoller(3));

// function diceRoller(numDice, numSpecified) {
//   var output = [];
//    if (numSpecified === undefined) {
//     numSpecified = 6;
//    }
//    for (var i = 0; i < numDice; i++){
//      output.push(Math.ceil(Math.random() * numSpecified));
//   }
//   return output;
// }

// console.log(diceRoller(10);

function DiceRoller() {
  
  
  this.hand = [];
  this.roll = function(numRoll, numSpecified) {
    numSpecified = numSpecified || 6;
      var output = [];
      for (var i = 0; i < numRoll; i++){
       output.push(Math.ceil(Math.random() * numSpecified));
      } 
      this.hand = output;
      return this.hand;
    }


}
 
  var game = new DiceRoller();


 
  console.log(game.hand);
  console.log(game.roll(6));
  console.log(game.roll(7));
  console.log(game.hand.length);
 
 




























