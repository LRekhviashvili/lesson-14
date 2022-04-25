//1
let array =[5, 25, 89, 120, 36];
array.push ("javascript","python");
array.unshift ("html", "css");
array.shift ();
array.pop(); 

console.log (array.length);
console.log(array);

//2
let array1=["orange", "banana", "pear"];
console.log (array1.length);

array1.push ("apple","pineapple");
array1.unshift ("watermelon");
console.log (array1.length);

array1.splice (2, 0, "mango"); 
console.log(array1);

array1.shift();
array1.pop(); 
console.log (array1.length);

//3
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];

