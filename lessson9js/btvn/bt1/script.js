

const array=[10, 3, 2 ,20, 7, 9, 21, 24];
// Tính tích của các phần tử trong mảng đó

// let product = 1;
// for(let i = 0; i < arr.length; i++){
//     product *= arr[i];
// }
// console.log(product);



//----------------------------------------
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.\
// function findSmallestEven(arr) {
//     let smallestEven = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             if (smallestEven === null || arr[i] < smallestEven) {
//                 smallestEven = arr[i];
//             }
//         }
//     }
//     return smallestEven;
// }
// let smallestEven = findSmallestEven(array);
// if (smallestEven !== null) {
//     console.log("Số nhỏ nhất chia hết cho 2 trong mảng là: " + smallestEven);
// } else {
//     console.log("Không có số nào chia hết cho 2 trong mảng.");
// }


// ------------------------------------------------------
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.

// function findBiggest(arr){
//     let biggest = null;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 3 === 0){
//             if(biggest === null || arr[i] > biggest){
//                 biggest = arr[i];
//             }
//         }
//     }
//     return biggest;
// }
// let biggest = findBiggest(array);
// if(biggest !== null) {
//     console.log("Số lon nhat chia hết cho 3 trong mảng là: " + biggest);
// } else {
//     console.log("Không có số nào chia hết cho 3 trong mảng.");
// }


//--------------------------------------------------------------
// -Tính giá trị trung bình của mảng.
// function findAverage(arr){
//     let sum = 0;
//         for(let number of array){
//         sum += number;
//         }
//         let avr = sum / arr.length;
//         return avr;
//         }
//     let avr = findAverage(array);
// console.log("avr: " + avr);


// ---------------------------------------------------------------
// -Lọc ra các số nguyên tố trong mảng.
// function filterPrimes(arr){
//     let primes = [];

//         function isPrime(num){
//             if(num <= 1)
//                 return false;
//             for(let i  = 2; i <= Math.sqrt(num);i++){
//                 if(num % i === 0)
//                     return false;
//             }
//             return true;
//         }
//         for(let i = 0; i< arr.length; i++){
//             if(isPrime(arr[i])){
//                 primes.push(arr[i]);
//             }
//         }
//         return primes;
// }

// let primeNumbers = filterPrimes(array);
// console.log(primeNumbers);

//---------------------------------------------------------------------
//-Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let hasNumberLessThan10 = false;

// for(let i = 0; i < array.length; i++){
//     if(array[i] < 10){
//         hasNumberLessThan10 = true;
//         break;
//     }
// }
// if (hasNumberLessThan10) {
//     console.log("Có số nhỏ hơn 10 trong mảng.");
// } else {
//     console.log("Không có số nhỏ hơn 10 trong mảng.");
// }

// --------------------------------------------------------------------------
//Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let hasNumberGreaterThan20 = false;
// for(let i = 0 ;  i < array.length; i++){
//     if(array[i] >20){
//         hasNumberGreaterThan20 = true;
//         break;
//     }
// }
// if(hasNumberGreaterThan20){
//     console.log("co so lon hon 20 trong mang")
// }else{
//     console.log("khong co so nao lon hon 20");
// }

// ---------------------------------------------------------------------------
//Nhập vào số n cho đến khi n là 1 số trong mảng s.
// let x = false;

// while( x === false){
//     let n = parseInt(prompt("nhap vao so n"));
    
//     for(let i = 0; i < array.length; i++){
//         if(n === array[i]){
//             x = true;     
//             console.log("Có số " + n + " trong mảng.");
//             break;  
//         }
//     }
// }

//--------------------------------------------------------------------------
//sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
function bubbleSort(arr){
    const len = arr.length;
for(let i = 0; i < len ; i++){
    for(let j = 0; j < len - i -1 ; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j +1] = temp;           
            } 
        }
    }
    return arr;
}
console.log("Mảng trước khi sắp xếp:", array);
console.log("Mảng sau khi sắp xếp:", bubbleSort(array.slice()));

