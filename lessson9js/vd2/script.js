const arr2=[10, -10, -3, 100, 53, 49,67,68,70, 70, 99, 91]

for(let number of arr2){
    if(number % 2 == 0){
        console.log(number);
    }
}
let sum = 0;
for(let number of arr2){
    sum = sum + number;
}
console.log(sum);

let min = arr2[0];
for(let number of arr2){
    if(number < min){
        min = number;
    }
}
console.log(min);