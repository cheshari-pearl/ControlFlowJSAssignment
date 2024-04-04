//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function numbers(nums){
    let firstFour = nums.slice(0,4).map(num => {
        console.log(num * num)
    });
    let middle = nums.slice(4,-2);
    let lastTwo = nums.slice(-2).map(num => {
     console.log(num + 10)
    });
     
    let newArray = firstFour.concat(middle).concat(lastTwo);
   return newArray;
};
//example
numbers([1,2,3,4,4,3,2,1])





//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
while (i < arrNum.length) {
    if (i === 4) {
        break; 
    }
    console.log(arrNum[i]);
    i++;
  }


//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:

function myFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
      if (i === 2) {
          continue; 
      }
      console.log(fruits[i]);
  }
}
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
myFruits(fruits);



//Write a function that accepts an array of strings and console.logs each element using a for loop.


  let arr = (["dogs", "cats", "rabbits", "birds"]);
for (let item of arr) {
    console. log(item. toString()) }
     let myArr = (item) => item




//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

function reverseString(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
      reversed += str[i];
      i--;
  }
  return reversed;
}
let text = "Good morning";
let reversedString = reverseString(text);
console.log(reversedString);



