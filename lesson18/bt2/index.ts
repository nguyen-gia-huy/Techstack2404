//Bài tập 2: Mảng và Tuple

//- Mảng: Tạo một mảng numbers chứa các số nguyên. Viết hàm sumArray nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
import * as PromptSync from 'prompt-sync';
const prompt = PromptSync();


// const a :Number = prompt('nhap vao a:')
// const b :Number = prompt('nhap vao b:')
// function sumArray(a,b : number){
//     console.log('ket qua la:' + (a+b));
// }sumArray(Number(a), Number(b));

//- Tuple: Định nghĩa một tuple employee có hai phần tử: tên nhân viên (kiểu string) và tuổi (kiểu number). Khởi tạo một biến emp1 là một đối tượng tuple và gán giá trị tương ứng.

type Employee =[string, number];

let name:string = prompt('nhap ten nhan vien:');
let age:number = prompt('nhap tuoi nhan vien:');

let emp1: Employee = [name,age ];
console.log('-----------output---------------')
console.log(`Ten nhan vien: ${emp1[0]}`);
console.log(`Tuoi nhan vien: ${emp1[1]}`);