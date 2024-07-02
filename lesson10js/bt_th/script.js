// Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 
// và đưa ra kết quả dưới dạng 1 mảng 
// gồm các nghiệm của phương trình.

// function timNghiem(a, b, c){
//     if(a === 0){
//         throw new Error ("He so phai khac khong");
//     }

//     const delta = b * b - 4 * a * c;

//     if(delta > 0){ //hai nghiem phan biet
//         const x1 = (-b + Math.sqrt(delta)/(2 * a));
//         const x2 = (-b + Math.sqrt(delta)/(2 * a));
//         return [x1, x2];
//     }else if(delta === 0){ //nghiem kep
//         const x = -b /(2 * a);
//         return [x];
//     }else{
//         // vo nghiem
//         return [];
//     }
// }
// const a = 1;
// const b = -3;
// const c = 2;
// const result = timNghiem(a,b,c);
// console.log(result);

//-----------------------------------------------------------------
// Khai báo 1 function với đầu vào là 3 số a, b, c. 
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. 
// Nếu tạo thành tam giác, đầu ra là true. 
// Ngược lại, đầu ra là false.

// function checkTamGiac(a,b,c){
//     if(a + b > c){
//         return true;
//     }else if(b + c > a){
//         return true;        
//     }else if(c + a > b){
//         return true;
//     }else{
//         return false;
//     }
// }
// const a = 9;
// const b = 4;
// const c = 8;
// const result = checkTamGiac(a,b,c);
// if(result === true){
//     console.log("day la tam giac")
// }else{
//     console.log("day khong phai la tam giac")
// }


//---------------------------------------------------------------
//Khai báo 1 function với đầu vào là day, month, year. 
// Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, 
// tháng năm hợp lệ không.
// function isValidDate(day,month,year){
//     let isValidDate = true;
//     if(typeof Date !== 'number' || typeof month !== 'number' || typeof year !== 'number'){
//         return false;
//     }
//     if(month < 1 || month > 12 || day < 1 || year < 1){
//         return false;
//     }
//     const date = new Date(year, month -1, day);

//     return date.getFullYear() == year && date.getMonth() === month -1 && date.getDate() === day ;
// }
// console.log(isValidDate(31, 12, 2023));  // Output: true
// console.log(isValidDate(29, 2, 2020));   // Output: true (năm nhuận)
// console.log(isValidDate(30, 2, 2021));   // Output: false (không có ngày 30 tháng 2)
// console.log(isValidDate(31, 4, 2021));   // Output: false (không có ngày 31 tháng 4)
// console.log(isValidDate(1, 13, 2021));   // Output: false (không có tháng 13)