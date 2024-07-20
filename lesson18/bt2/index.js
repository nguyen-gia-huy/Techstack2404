"use strict";
//Bài tập 2: Mảng và Tuple
Object.defineProperty(exports, "__esModule", { value: true });
//- Mảng: Tạo một mảng numbers chứa các số nguyên. Viết hàm sumArray nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var name = prompt('nhap ten nhan vien:');
var age = prompt('nhap tuoi nhan vien:');
var emp1 = [name, age];
console.log('-----------output---------------');
console.log("Ten nhan vien: ".concat(emp1[0]));
console.log("Tuoi nhan vien: ".concat(emp1[1]));
