// 1. Write a js program to read and print elements of array.
// 2. Write a js program to print all negative elements in an array.
// 3. Write a js program to find sum of all array elements.
// 4. Write a js program to find maximum and minimum element in an array.
// 5. Write a js program to find second largest element in an array.
// 6. Write a js program to count total number of even and odd elements in an array.
// 7. Write a js program to count total number of negative elements in an array.
// 8. Write a js program to copy all elements from an array to another array.
// 9. Write a js program to insert an element in an array.
// 10. Write a js program to delete an element from an array at specified position.
// 11. Write a js program to count frequency of each element in an array.
// 12. Write a js program to print all unique elements in the array.
// 13. Write a js program to count total number of duplicate elements in an array.
// 14. Write a js program to delete all duplicate elements from an array.
// 15. Write a js program to merge two array to third array.
// 16. Write a js program to find reverse of an array.
// 17. Write a js program to put even and odd elements of array in two separate array.
// 18. Write a js program to search an element in an array.
// 19. Write a js program to sort array elements in ascending or descending order.
// 20. Write a js program to sort even and odd elements of array separately.
// 21. Write a js program to left rotate an array.
// 22. Write a js program to right rotate an array.
// 23. Write a js program to print day of week name using switch case.
// 24. Write a js program print total number of days in a month using switch case.
// 25. Write a js program to check whether an alphabet is vowel or consonant using switch case.
// 26. Write a js program to find maximum between two numbers using switch case.
// 27. Write a js program to check whether a number is even or odd using switch case.
// 28. Write a js program to check whether a number is positive, negative or zero using switch case.
// 29. Write a js program to find roots of a quadratic equation using switch case.
// 30. Write a js program to create Simple Calculator using switch case.

//Solution


// 1. Write a js program to read and print elements of array.

// var numbers = [1,2,3,4,5,6,7,8,9]
// console.log("Total Element", numbers);

// 2. Write a js program to print all negative elements in an array.

// var numbers = [1,2,-3,4,-5,-6,7,8,9,10,12,11,34,65,-45,];
// var neg = numbers.filter(negativeNumbers);
// function negativeNumbers(neg)
// {
//     return neg < 0 ;
// }
// console.log("Negative Number is",neg);

// 3. Write a js program to find sum of all array elements.

// var numbers = [1,2,3,4,5,6,7,8,9]
// let sum = 0;
// numbers.forEach(sumAll)
// function sumAll(item){
//     sum += item;

// }
// console.log(sum);


// 4. Write a js program to find maximum and minimum element in an array.

// var numbers = [10,1,2,3,14,15,6,37,8,1,9];
// numbers.sort(function(x,y){
// return x-y
// })
// console.log("Minimum is",numbers[0]);               // For  Minimum
// console.log("Maximum is",numbers[numbers.length-1]);  //For Maximum


// 5. Write a js program to find second largest element in an array.

// var numbers = [10, 2, 3, 14, 15, 6, 37, 8, 9]
// numbers.sort(function (x, y) {
//     return x - y
// })
// console.log(numbers[numbers.length - 2])

// 6. Write a js program to count total number of even and odd elements in an array.
// var numbers = [10, 2, 3, 14, 15, 6, 37, 8, 9]

// numbers.sort(function (x, y) {
//     return x - y
// })
// var secNumber = numbers.filter(function (even) {
//     return even % 2 == 0;
    
// })
// console.log("Even Numebrs",secNumber);

// var oddNumber = numbers.filter(function (odd) {
//     return odd % 2 !== 0;
    
// })
// console.log("Odd Numebrs",oddNumber);
// 7. Write a js program to count total number of negative elements in an array.

// var ary = [1,2,4,3,-3,2,-5,-3,-2,-7]
// var negNumber = ary.filter(function(x){
//     return x < 0
// })
// console.log("Negative Numbers is", negNumber);

// 8. Write a js program to copy all elements from an array to another array.

// var numbers = [10,2,3,14,15,6,37,8,9]
// console.log("First Array",numbers);
// var copyArray = numbers.map(function(x){
//     return x 
// })
// console.log("Copy Array",copyArray);


// // 9. Write a js program to insert an element in an array.
// var numbers = [10,2,6,4,9,21,4];
// numbers.splice(3,0,3,21,1)
// console.log(numbers);

// 10. Write a js program to delete an element from an array at specified position.

// var num = [10,2,6,4,9];
// num.pop()
// console.log(num);

// 11. Write a js program to count frequency of each element in an array.
//  num=[1,1,1,2,2,2,3,3,3]
// var a=0;
// var b=0;var
// for(let i=0;i<9;i++){
//     num[a]
//     a++
//     if (num[0]=num[a]) {
//         b++
//     }
    
// }

// console.log(b);
// 12. Write a js program to print all unique elements in the array.

// var elements = [1,1,1,2,2,2,4,4,4,5,5,5];
// console.log(elements);
// var uniqueElements = elements.filter(function(currentValue,index){
// return elements.indexOf(currentValue) === index;
// });
// console.log(uniqueElements);

// 13. Write a js program to count total number of duplicate elements in an array.
// var elements = [1,10,2,2,2,2,2,4,4,5,55,7,7,]
// var duplicate = []
// for (let i = 0; i < elements.length; i++) {
//   if (duplicate.indexOf(elements[i]) === -1) {
//       console.log(elements[i]);
//   }
// }
// 14. Write a js program to delete all duplicate elements from an array.

// 15. Write a js program to merge two array to third array
// var ary1 = ["I Love"];
// var ary2 = [" pakistan"];
// var ary3 = [ary1 + ary2]  //By Catination
// console.log(ary3);

// 16. Write a js program to find reverse of an array.
// var ary = [1,2,3,4,5,6,7,8,9];
// ary.reverse();
// console.log("Reverse order", ary);

// 17. Write a js program to put even and odd elements of array in two separate array.

//Opar Wala b rehta hai abi

// 18. Write a js program to search an element in an array.
// var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// 19. Write a js program to sort array elements in ascending or descending order.
// For String
//Ascending order
// var ary = ["mango" , "apple", "bnana", "orange"];
// ary.sort();
// console.log(ary);

//Descendign order
// var ary = ["mango" , "apple", "bnana", "orange"];
// ary.sort();
// ary.reverse();
// console.log(ary)

// For Numeric Values
// Ascending order

// var ary = [2,4,3,6,5,7,2,1,10]
// ary.sort(function(a, b){return a - b})
// console.log(ary);

// Descending order
// var ary = [2,4,3,6,5,7,2,1,10]
// ary.sort(function(a, b){return a - b})
// console.log(ary);

// 20. Write a js program to sort even and odd elements of array separately.



// 23. Write a js program to print day of week name using switch case.
// var days = parseInt(prompt("Enter your Number"))
// switch (days) {
//     case 0:
//         console.log("Sunday");
//         break;

//     case 1:
        
//         console.log("Monday");
//         break;
//     case 2:
        
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//         default:
//             console.log("invalid value");
//             break;
//     }
// 24. Write a js program print total number of days in a month using switch case.
// var day = parseInt(prompt("Enter Numebr"));
// switch (day) {
//     case 0:
//         console.log("31 days");
//         break;

//         case 1:
//         console.log("28 days");
//         break;
//         case 2:
//         console.log("31 days");
//         break;
//         case 3:
//         console.log("30 days");
//         break;
//         case 4:
//         console.log("31 days");
//         break;

//         case 5:
//         console.log("30 days");
//         break;
//         case 6:
//         console.log("31 days");
//         break;
//         case 7:
//         console.log("31 days");
//         break;
//         case 8:
//         console.log("31 days");
//         break;
//         case 9:
//         console.log("30 days");
//         break;
//         case 10:
//         console.log("30 days");
//         break;
//         case 11:
//         console.log("31 days");
//         break;
//         // case 12:
//         // console.log("31 days");
//         // break;

//     default:
//         console.log("Inavlid");
//         break;
// }

// 25. Write a js program to check whether an alphabet is vowel or consonant using switch case.
// var ch = prompt("Enter your Alphabet")
// switch (ch=="a"  || ch=="i"  || ch=="e"  || ch=="u"  || ch=="o" ) {
//     case true:
//         console.log("Vowel");
//         break;
//         case false:
//         console.log("Constant");
//             break;
//     default:
// console.log("Invalid");
//         break;
// }
// 

// 26. Write a js program to find maximum between two numbers using switch case.
// var num1 = parseInt(prompt("Enter First Number"));
// var num2 = parseInt(prompt("Enter Second Numebr"));
// // var num3 = [num1,num2];
// switch (num1>num2) {
//     case true:
//       console.log("First is Greater");
//       break;
//       case false:
//         console.log("Second is Greater");
//         break;
//     default:
//         console.log("Numbers are Equal",);
//         break;
// }

// 27. Write a js program to check whether a number is even or odd using switch case.
// var num = parseInt(prompt("Enter Number"));
// switch (num%2==0) {
//     case true:
//         console.log("Number is Even");
//         break;

//         case false:
//         console.log("Number is Odd");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// 28. Write a js program to check whether a number is positive, negative or zero using switch case.
// var num = parseInt(prompt("Enter Number"));
// switch (num>0) {
//     case true:
//         console.log("Number is Positive");
//         break;
//         case false:
//         console.log("Number is Negative");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }
// 29. Write a js program to find roots of a quadratic equation using switch case.

// 30. Write a js program to create Simple Calculator using switch case.
// var num1 = prompt("First Number");
// var num2 = prompt("Second Number");
// var operator = prompt("Enter Operator");
// switch (operator) {
//     case '+':
//         var Sum = parseFloat(num1)+ parseFloat(num2)
//         console.log(Sum);
//         break;
//         case '/':
//         console.log(num1 / num2);
//         break;

//         case '-':
//         console.log(num1 - num2);
//         break;

//         case '*':
//         console.log(num1 * num2);
//         break;
//     default:
//         console.log("Invalid something");
//         break;
// }
