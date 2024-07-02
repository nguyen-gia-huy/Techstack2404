const arr1=[3,9,20,67]
console.log(arr1[0]);
console.log(arr1[3]);

console.log(arr1[1] + arr1[2]);

let temp = arr1[1];
    arr1[1] = arr1[3];
    arr1[3] = temp;
console.log(arr1);