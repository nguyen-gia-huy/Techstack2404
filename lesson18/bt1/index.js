"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**** Bài tập cơ bản
Bài tập 1: Cơ bản về Kiểu dữ liệu
-Tạo biến và khai báo kiểu: Hãy tạo các biến sau và khai báo kiểu phù hợp cho mỗi biến:
    +Biến fullName lưu trữ tên đầy đủ của một người.
    +Biến age lưu trữ tuổi của người đó.
    +Biến isStudent biểu thị người đó có phải là sinh viên hay không.*/
// let fullName: string = 'huy';
// let age: number = 18;
// let isStudent: boolean = true;
//-Viết hàm printId nhận vào một tham số có thể là chuỗi hoặc số. Nếu tham số là chuỗi, hàm sẽ in ra ID: <tham số>. Nếu tham số là số, hàm sẽ in ra Employee ID: <tham số>.
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var a = prompt('nhap vao a: ');
function printId(a) {
    if (typeof a === "string") {
        console.log('ID: ' + a);
    }
    else if (typeof a === 'number') {
        console.log('Employee ID: ' + a);
    }
}
if (!isNaN(Number(a))) {
    printId(Number(a));
}
else {
    printId(String(a));
}
//-Định nghĩa alias Person cho một object có các thuộc tính name (kiểu string) và age (kiểu number). Sử dụng alias này để khai báo một biến person với các giá trị tương ứng.
// import * as readlineSync from 'readline-sync';
// // Định nghĩa alias Person
// type Person = {
//     name: string;
//     age: number;
// };
// // Sử dụng readline-sync để yêu cầu người dùng nhập tên và tuổi
// let name: string = readlineSync.question('Nhap ten: ');
// let age: number = parseInt(readlineSync.question('Nhap tuoi: '), 10);
// // Khai báo biến person với các giá trị tương ứng
// let person: Person = {
//     name: name,
//     age: age
// };
// // In ra thông tin của biến person
// console.log('--------------- output-------------------')
// console.log(`Name: ${person.name}`);
// console.log(`Age: ${person.age}`);
